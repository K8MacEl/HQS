import "./PropertyShowPage.css"
import { Link } from "react-router-dom"

export default function PropertyShowPage({property}) {
console.log("this is property--->", property)



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
                    <div className="property_box">
                        <div className="property_address_title"> 
                        </div>
                        <div className="property_address_input">
                            
                        </div>
                        <div className="voucher_holder_title">
                            Voucher Holder:
                        </div>
                        <div className="voucher_holder_input">
                            INPUT Voucher Holder:
                        </div>
                        <div className="tenant_id_title">
                            Tenant ID Number:
                        </div>
                        <div className="tenant_id_input">
                            INPUT Tenant ID
                        </div>
                        <div className="property_owner_title">
                            Property Owner:
                        </div>
                        <div className="property_owner_input">
                            INPUT Property Owner
                        </div>
                        <div className="census_title">
                            Census Track:
                        </div>
                        <div className="census_input">
                            INPUT census track
                        </div>
                        <div className="request_inspection">
                            <h3>INSPECTION REQUEST OPTION HERE</h3>
                        </div>
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