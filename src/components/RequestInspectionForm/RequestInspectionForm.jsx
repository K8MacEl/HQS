import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import requestService from "../../utils/requestService";
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Segment,
    Dropdown,
} from "semantic-ui-react";


const options = [
    { key: 'i', text: 'Initial', value: 'initial' },
    { key: 's', text: 'Special', value: 'special' },
    { key: 'r', text: 'Reinspection', value: 'reinspection' }
]

export default function RequestInspectionForm({propertyId, submitRequest, requestDetails, setRequestDetails }) {
  
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
                autoComplete="off">
                <div>
                    INSPECTION REQUEST
                </div>
                <Form
                    autoComplete="off"
                    onSubmit={submitRequest} className="request_form">
                    <Form.Select
                        fluid label="Inspection request type"
                        name="requestInspection"
                        label="Inspection Type Requested"
                        options={options}
                        placeholder="Inspection Type"
                        value={requestDetails.requestInspection}
                        onChange={handleChange}
                    />
                    <Button type="submit" className="request_btn" color="black">
                        SUBMIT REQUEST
                    </Button>
                </Form>
            </Grid>
        </>


    )


}
