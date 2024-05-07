
import { token } from "morgan";
import PropertyShowPage from "../PropertyShowPage/PropertyShowPage"
import { useState, useEffect } from "react";
import tokenService from "../../utils/tokenService";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./PropertyIndexPage.css"
import { Link } from "react-router-dom"

export default function PropertyIndexPage() {
    const [properties, setProperties] = useState([])//i want an array off all properties
    const [loading, setLoading] = useState(true)

    async function getProperties() {
        try {
            const response = await fetch("/api/properties", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                },
            });

            const data = await response.json();
            console.log(data, "this is data")
            setProperties(data)
        setLoading(false);
    } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
    
    useEffect(() => {
        // This useEffect is called when the page loads
        // call the function getProperties
        getProperties();
      }, []);

      if (loading) {
        return <div>Hamsters working hard...loading properties...</div>
      }

    return (
        <>
        <Header></Header>
            <div className="yellow_top_page">
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <br />
                    <h1 style={{
                        fontSize: "8vh"
                    }}>Property Index Page</h1>
                </header>
                <nav className="property_header">
                    <div>Property Address</div>
                    <div>Property Profile Link</div>
                </nav>
                <div className="properties.container">
                    {properties.length > 0 ? (
                        properties.map((property) => (
                            <div key={property._id} className="property_row"> 
                                <div className="address_column"> {property.streetNumber}, {property.streetName}
                                </div>
                                <div className="property_show_link"> 
                                <Link to={`/${property._id}`}> View Property
                                </Link> 
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No properties found.</p>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

