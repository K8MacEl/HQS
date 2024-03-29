//make this page viewable to inspectors only
//on this page I want to show all inspections with a filter feature by status
import { useState, useEffect } from 'react';
import PropertyShowPage from '../PropertyShowPage/PropertyShowPage';
import tokenService from '../../utils/tokenService';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default function InspectionIndexPage() {
    const [properties, setProperties] = useState([]); //array of properties

    async function getProperty() {
        try {
            const response = await fetch("/api/posts", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                },
            });
            const data = await response.json(

            )
        } catch (err) {
            console.log(err)
        }




        useEffect(() => {
            // This useEffect is called when the page loads

            // Don't forget to call the function
            getProperty();
        }, []);
    }
    return (
        <>
        <Header></Header>
            <div className="property_body">
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <br />
                    <h1 style={{
                        fontSize: "10vh"
                    }}>ALL INSPECTIONS</h1>
                    <h2 style={{
                        fontsize: "10vh"
                    }}></h2>
                </header>
                <section className="propertiesForInspection">


                </section>
            </div>
            <Footer></Footer>
        </>
    )
}