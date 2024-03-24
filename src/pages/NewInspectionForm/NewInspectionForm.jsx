import LivingRoomInspection from "../../components/LivingRoomInspection/LivingRoomInspection"
import KitchenInspection from "../../components/KitchenInspection/KitchenInspection"
import BathroomInspection from "../../components/BathroomInspection/BathroomInspection"
import OtherRoom from "../../components/OtherRoom/OtherRoom"
import SecondaryRoom from "../../components/SecondaryRoom/SecondaryRoom"
import Exterior from "../../components/Exterior/Exterior"
import HeatingAndPlumbing from "../../components/HeatingAndPlumbing/HeatingAndPlumbing"
import GeneralHealth from "../../components/GeneralHealth/GeneralHealth"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import {
    Button,
    Form,
    Grid,
    Segment
} from "semantic-ui-react";

import inspectionService from "../../utils/inspectionService";
import tokenService from "../../utils/tokenService"
export default function NewInspectionForm() {
    const [error, setError] = useState('');
    const [inspectionDetails, setInspectionDetails] = useState({
        dateOfRequest: '',
        dateOfLastRequest: '',
        numOfChildren: '',
        housingType: '',
        numOfBeds: '',
        numOfSleeping: '',
        summaryOfDecision: ''
    })



function handleChange(e) {
    setInspectionDetails({
        ...inspectionDetails,
        [e.target.name]: e.target.value,
    });
}

async function handleSubmit(e) {
    e.preventDefault();
    try{
        const data = await inspectionService.handleAddInspection(inspectionDetails);
        console.log("this is data", data)
        setInspectionDetails(data.propertyDoc);// I THINK THIS IS RIGHT SINCE ITS EMBEDDED IN PROPERTY DOCS??    
    } catch (err) {
        console.log(err);
    }
}

useEffect(() => {
    setInspectionDetails({
        dateOfRequest: '',
        dateOfLastRequest: '',
        numOfChildren: '',
        housingType: '',
        numOfBeds: '',
        numOfSleeping: '',
        summaryOfDecision: ''
    });
}, []);

return (
    <>
        <Header></Header>
        <div className="property_body">
            <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
            <header className="title">
                <h1 style={{ fontSize: "10vh" }}>INSPECTION FORM</h1>
                <h2 style={{ fontSize: "10vh" }}></h2> {/* Fixed fontSize */}
            </header>
            <Grid className="Inspection_Form" textAlign="center" style={{ height: "100vh" }} verticalAlign="middle" >
            <Grid.Column style={{ 
                        maxWidth: 650, 
                        backgroundColor: 'rgb(255, 196, 56)' }}>
                    <h1>NEW INSPECTION</h1>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Segment stacked>
                    <Form.Input
                     fluid label="Date of Request"
                     name="dateOfRequest"
                     type="date"
                     value= {inspectionDetails.dateOfRequest}
                     onChange={handleChange}
                     required                    
                    />
                    <Form.Input
                     fluid label="Date of LAST Request"
                     name="dateOfLastRequest"
                     type="date"
                     value= {inspectionDetails.dateOfLastRequest}
                     onChange={handleChange}                
                    />
                    <Form.Input
                     fluid label="Number of Children in Home"
                     name="numOfChildren"
                     type="number"
                     value= {inspectionDetails.numOfChildren}
                     onChange={handleChange}
                     required                    
                    />
                    <Form.Input
                        fluid label="Housing Type: MAKE THIS OPTIONS!"
                        name="housingType"
                        value= {inspectionDetails.housingType}
                        onChange={handleChange}
                        required                    
                        />
                    <Form.Input
                     fluid label="Number of Bedrooms"
                     name="numOfBeds"
                     type="number"
                     value= {inspectionDetails.numOfBeds}
                     onChange={handleChange}
                     required                    
                    />
                     <Form.Input
                     fluid label="Number of Sleeping Rooms"
                     name="numOfSleeping"
                     type="number"
                     value= {inspectionDetails.numOfSleeping}
                     onChange={handleChange}
                     required                    
                    />
                    <Form.Input
                        fluid label="Summary of Decision: MAKE THIS OPTIONS!"
                        name="summaryOfDecision"
                        value= {inspectionDetails.summaryOfDecision}
                        onChange={handleChange}
                        required                    
                        />
                         <Button type="submit" className="btn" color="black">
                    Submit Main Inspection
                    </Button>
                    </Segment>
                    {error ? <ErrorMessage error={error} /> : null}
                    </Form> 
            </Grid.Column>
        </Grid>
           



            <div>
                <LivingRoomInspection>
                </LivingRoomInspection>
            </div>
            <div>
                <KitchenInspection>

                </KitchenInspection>

            </div>
            <div>
                <BathroomInspection>

                </BathroomInspection>
            </div>
            <div>
                <OtherRoom>

                </OtherRoom>
            </div>
            <div>
                <SecondaryRoom>
                </SecondaryRoom>
            </div>
            <div>
                <Exterior>
                </Exterior>
            </div>
            <div>
                <HeatingAndPlumbing>
                </HeatingAndPlumbing>
            </div>
            <div>
                <GeneralHealth>

                </GeneralHealth>
            </div>
            <Footer></Footer>
        </div>
    </>
)
}