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

export default function RequestInspectionForm({propertyId, submitRequest, requestDetails, setRequestDetails, user, loggedUser, handleLogout }) {
  
    const [error, setError] = useState('')
    const navigate = useNavigate();

    function handleChange(e, target) {
        if(target) {
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

    
    return (
        <>
            <Grid className="request_inspection" textAlign="center"
                autoComplete="off" style={{textAlign:"center"  }}>
                <Form
                    autoComplete="off"
                    onSubmit={submitRequest} className="request_form">
                        <h2>REQUEST INSPECTION</h2>
                    <Form.Select
                        fluid label="Type of Inspection"
                        name="requestInspection"
                        options={options}
                        placeholder="Inspection Type"
                        value={requestDetails.requestInspection}
                        onChange={handleChange}
                    />
                    <Form.Input 
                        fluid label="Name of Requestor"
                        name="requestorName"
                        placeholder="Name of Requestor"
                        value={requestDetails.requestorName}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid label="Date of Request"
                        type="Date"
                        name="requestDate"
                        placeholder="Date"
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
