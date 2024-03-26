import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import requestService from "../../utils/requestService";
import "./RequestInspectionForm.css";
import {
    Button,
    Form,
    Grid,
} from "semantic-ui-react";


const options = [
    { key: 'i', text: 'Initial', value: 'initial' },
    { key: 's', text: 'Special', value: 'special' },
    { key: 'r', text: 'Reinspection', value: 'reinspection' }
]

export default function RequestInspectionForm({ property, propertyId, submitRequest, user, loggedUser, handleLogout }) {

    const [error, setError] = useState('')
    const navigate = useNavigate();
    const [requestDetails, setRequestDetails] = useState({
        inspectionType: '',
        requestInfo: '',

    })
    console.log(requestDetails, "request details")
    function handleChange(e, target) {
        if (target) {
            setRequestDetails({
                ...requestDetails,
                [target.name]: target.value,
            });
        } else {
            setRequestDetails({
                ...requestDetails,
                [e.target.name]: e.target.value,
            });

        }


    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            submitRequest(requestDetails)
        } catch (err) {
            console.log(err.message, " <- this comes from the throw in utils/signup");

        }
    }
    useEffect(() => {
        setRequestDetails({

        });
    }, []);


    return (
        <>
            <Grid className="request_inspection" textAlign="center"
                autoComplete="off" style={{ textAlign: "center" }}>
                <Form
                    autoComplete="off"
                    onSubmit={handleSubmit} className="request_form">
                    <h2>REQUEST INSPECTION</h2>
                    <Form.Select
                        fluid label="Type of Inspection"
                        name="inspectionType"
                        options={options}
                        placeholder="Inspection Type"
                        value={requestDetails.inspectionType}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid label="Details of Request (ie: scheduling details and contact information"
                        name="requestInfo"
                        placeholder="Details of Request"
                        value={requestDetails.requestInfo}
                        onChange={handleChange}
                    />

                    <Form.Input
                        fluid label="Date of Request"
                        type= "date"
                        name="requestDate"
                        placeholder="Date of Request"
                        value={requestDetails.requestDate}
                        onChange={handleChange}
                    />

                    <Button type="submit" className="request_btn" color="black">
                        SUBMIT REQUEST
                    </Button>
                </Form>
            </Grid>
            <br></br>
        </>


    )


}
