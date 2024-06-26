import "./PropertyShowPage.css"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import propertyService from "../../utils/propertyService";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import tokenService from "../../utils/tokenService";
import RequestInspectionForm from "../../components/RequestInspectionForm/RequestInspectionForm";
// import RequestInspectionForm from "./components/RequestInspectionForm/RequestInspectionForm";
import {
    Button,

} from "semantic-ui-react";
import requestService from "../../utils/requestService";


export default function PropertyShowPage() {
    // console.log("this is property--->", propertyToSendToServer)
    const [property, setProperty] = useState(null); //this will be an array
    const [loading, setLoading] = useState(true)
    const { propertyId } = useParams();
    const [error, setError] = useState('');


    async function submitRequest(requestDetails) {
        try {
            const data = await requestService.createRequest(requestDetails, propertyId);
            console.log("this is data for creating request", data)
            setProperty(data)

        } catch (err) {
            console.log(err.message, "<---this comes from the the throw in utils/create");
            setError("Check your terminal for errors!!!");
        }
    }

    async function getProperty() {
        try {
            //user params to grab that id

            const response = await fetch(`/api/properties/${propertyId}`, {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                },
            });
            const data = await response.json();
            setLoading(false)
            console.log(data, "this is data");
            setProperty(data.propertyDoc)
        } catch (err) {
            console.log(err);
        }
    }

    const navigate = useNavigate();

    function handleChange(e) {
        setProperty({
            ...requestDetails,
            [e.target.name]: e.target.value,
        });
    }

    async function handleDelete() {
        try {
            const data = await propertyService.deleteProperty(propertyId);
            console.log("this is data", data)
            navigate(`/newproperty`);
        } catch (err) {
            console.log(err.message, " <- this comes from the throw in utils/signup");
            setError("Check Your Terminal for errors!!!!!!!!");
        }
    }


    useEffect(() => {
        getProperty()
    }, [])
    if (!property) return <h1>Shoveling coal into the server...loading</h1>

    return (
        <>
            <Header></Header>
            <div className="property_body">
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <h1 style={{ fontSize: "10vh" }}>PROPERTY INFORMATION</h1>
                    <h2 style={{ fontSize: "10vh" }}></h2> {/* Fixed fontSize */}
                </header>
                <div className="address_title"><strong>Property Address:</strong></div>
                <nav className="address">
                    <div className="street_address">{property.streetNumber} {property.streetName}, {property.unit}</div>
                    <div>{property.city}, {property.stateProperty} {property.zip}</div>
                </nav>
                <section className="property_information">
                    <div className="property_box">
                        <div className="voucher_holder_title">
                            Voucher Holder:
                        </div>
                        <div className="voucher_holder_input">
                            {property.voucherHolder}
                        </div>
                        <div className="tenant_id_title">
                            Tenant ID Number:
                        </div>
                        <div className="tenant_id_input">
                            {property.tenantIdNumber}
                        </div>
                        <div className="property_owner_title">
                            Property Owner:
                        </div>
                        <div className="property_owner_input">
                            {property.propertyOwner}
                        </div>
                        <div className="census_title">
                            Census Track:
                        </div>
                        <div className="census_input">
                            {property.censusTrack}
                        </div>
                    </div>
                </section>

                <div className="button_container">

                    {/* <Button className="inspection_btn" style={{
                        height: "8vh",
                        width: "60vh",
                        background: "lightgrey",
                        borderColor: "black",
                        borderRadius: "10px",
                        fontSize: "20px"
                    }}>
                        <Link to="/newinspection">CREATE NEW INSPECTION</Link>
                    </Button> */}

                    <Button className="delete_button" action="submit" onClick={handleDelete} style={{
                        height: "8vh",
                        width: "60vh",
                        background: "red",
                        color: "white",
                        borderRadius: "10px",
                        fontSize: "20px",
                    }}>

                        DELETE PROPERTY
                    </Button>
                </div>

                <RequestInspectionForm submitRequest={submitRequest} />
            </div>
            <div className="title_request">
                <h1>REQUESTED INSPECTIONS:</h1>
            </div>
            <div className="request_container">
                {property.inspectionRequest.map((request) => (
                    <div key={request._id} className="requestor_name"> 
                        <div className="type_column" key={request._id}> 
                         <strong> {request.inspectionType} </strong> 
                        </div>
                        <div className="info_column">
                            {request.requestInfo}
                        </div>
                        <div className="divider">
                        <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
                        </div>
            </div>
                ))}

        </div >





        {/* <section className="inspections_embedded">
                INSPECTIONS EMBEDDED HERE! USE COMPONENTS!
            </section> */}
            < Footer ></Footer >
        </>
    )
}

