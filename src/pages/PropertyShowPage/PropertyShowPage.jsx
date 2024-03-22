import "./PropertyShowPage.css"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import propertyService from "../../utils/propertyService";
import tokenService from "../../utils/tokenService";
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Segment,
    Dropdown,
} from "semantic-ui-react";

export default function PropertyShowPage() {
    // console.log("this is property--->", propertyToSendToServer)
    const [property, setProperty] = useState({}); //this will be an array
    const [loading, setLoading] = useState(true)
    const { propertyId } = useParams();
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
            ...propertyDetails,
            [e.target.name]: e.target.value,
        });
    }

    async function handleDelete() {
        try {
            const data = await propertyService.deleteProperty(propertyId);
            console.log("this is data", data)
            //i beleive i need a function comparable to handleSignUpOrLogin here??
            navigate(`/newproperty`); ///change this later to a literal but for now home page
        } catch (err) {
            console.log(err.message, " <- this comes from the throw in utils/signup");
            setError('Check Your Terminal for errors!!!!!!!!');
        }
    }


    useEffect(() => {
        getProperty()
    }, [])



    console.log("this is property-->", property)

    return (
        <>
            <div className="property_body">
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <h1 style={{ fontSize: "10vh" }}>PROPERTY INFORMATION</h1>
                    <h2 style={{ fontSize: "10vh" }}></h2> {/* Fixed fontSize */}
                </header>
                <div className="address_title"><strong>Property Address:</strong></div>
                <nav className="address">
                    <div className="street_address">{property.streetNumber} {property.streetName}, {property.unit}</div>
                    <div>{property.city}, {property.state} {property.zip}</div>
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
                        <form className="request_inspection">
                            <div>
                                INSPECTION REQUEST
                            </div>
                            <div className="request_button">Request Inpsection:</div>
                            <div className="request_date">Date of Request</div>
                            <div className="requestor">Requestor</div>
                        </form>
                    </div>
                </section>

                <div className="button_container">
                <Button className="delete_button"action="submit" onClick={handleDelete} style={{
                    height: "8vh",
                    width: "77vh",
                    background: "red",
                    color: "white",
                    borderRadius: "10px",
                    fontSize: "20px",
                }}>

                    DELETE PROPETY
                </Button>
                </div>

                <section className="inspections_embedded">
                    INSPECTIONS EMBEDDED HERE!
                </section>
            </div>
        </>
    )
}

