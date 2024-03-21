import "./PropertyShowPage.css"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import propertyService from "../../utils/propertyService";
import tokenService from "../../utils/tokenService";

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
    useEffect(() => {
        getProperty()
    }, [])


    console.log("this is property-->", property)

    return (

        <>
            <div className="property_body">
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <br />
                    <h1 style={{
                        fontSize: "10vh"
                    }}>PROPERTY INFORMATION</h1>
                    <h2 style={{
                        fontsize: "10vh"
                    }}></h2>
                </header>
                <section className="property_information">
                        <div className="property_address_title">
                            Property Address:
                        </div>
                        <div className="property_address_input">
                            { property.streetNumber }
                            { property.streetName }
                            { property.unit }
                            { property.city }
                            { property.state }
                            { property. zip }

                        </div>
                    <div className="property_box">
                        <div className="voucher_holder_title">
                            Voucher Holder:
                        </div>
                        <div className="voucher_holder_input">
                            { property.voucherHolder }
                        </div>
                        <div className="tenant_id_title">
                            Tenant ID Number:
                        </div>
                        <div className="tenant_id_input">
                            { property.tenantIdNumber}
                        </div>
                        <div className="property_owner_title">
                            Property Owner:  
                        </div>
                        <div className="property_owner_input">
                             { property.propertyOwner }
                        </div>
                        <div className="census_title">
                            Census Track:
                        </div>
                        <div className="census_input">
                            { property.censusTrack}
                        </div>
                        <form className="request_inspection">
                            <h3>INSPECTION REQUEST OPTION HERE</h3>
                            requestInspection:
                            dateOfRequest:
                            requestor:
                        </form>
                    </div>
                </section>
            </div>
            <nav className="action_buttons">
                <Link to="/inspectionrequest">
                    <button style={{
                        height: "8vh",
                        width: "25vh",
                        background: "rgb( 255 196 56)",
                        color: "white",
                        borderRadius: "10px"
                    }}>
                        DELETE PROPETY
                    </button>
                </Link>
            </nav>
            <section className="inspections_embedded">
                INSPECTIONS EMBEDDED HERE!
            </section>
        </>
    )
} 