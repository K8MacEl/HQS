
import { token } from "morgan";
import PropertyShowPage from "../PropertyShowPage/PropertyShowPage"
import { useState, useEffect } from "react";
import tokenService from "../../utils/tokenService";

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
        // Don't forget to call the function
        getProperties();
      }, []);

      if (loading) {
        return <div>Loading properties...</div>
      }

    return (
        <>
            <div className="yellow_top_page">
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <br />
                    <h1 style={{
                        fontSize: "5vh"
                    }}>Property Index Page</h1>
                </header>
                <div>
                    {properties.length > 0 ? (
                        properties.map((property) => (
                            <div key={property._id}> {/* Assuming each property has a unique _id */}
                                <h3>{property.voucherHolder}</h3> 
                            </div>
                        ))
                    ) : (
                        <p>No properties found.</p>
                    )}
                </div>
            </div>
        </>
    );
}

