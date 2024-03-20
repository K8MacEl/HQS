import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "../NewPropertyForm/NewPropertyForm.css";
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Segment,
    Dropdown,
} from "semantic-ui-react";
import userService from "../../utils/userService";

export default function NewPropertyForm() {
    const [error, setError] = useState('');
    const [photo, setPhoto] = useState(null); // will need to inspections-should this go here?
    const [propertyDetails, setPropertyDetails] = useState({
        streetNumber: '',
        streetName: '',
        unitNumber: '',
        city: '',
        stateProperty: '',
        zip: '',
        voucherHolder: '',
        tenantIdNumber: '',
        propertyOwner: '',
        censusTrack: '',
    });
    const navigate = useNavigate();

    function handleChange(e, target) {
        if (target) {
            setPropertyDetails({
                ...propertyDetails,
                [target.name]: target.value,
            });
        } else {
            setPropertyDetails({
                ...propertyDetails,
                [e.target.name]: e.target.value,
            });
        }
    }

    function handleFileInput(e) {
        console.log(e.target.files);
        setPhoto(e.target.files[0]);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await userService.create(propertyDetails);
            navigate(`/${propertyDetails.propertyId}`);
        } catch (err) {
            console.log(err.message, " <- this comes from the throw in utils/signup");
            setError('Check Your Terminal for errors!!!!!!!!');
        }
    }

    return (
        <Grid className="New_Property_Container" textAlign="center" style={{ height: "100vh" }} verticalAlign="middle" >
            <Grid.Column style={{ 
                        maxWidth: 650, 
                        backgroundColor: 'rgb(255, 196, 56)' }}>
                    <h1>NEW PROPERTY</h1>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                <Segment stacked>
                    <Form.Input
                    fluid label="Property Address"
                    name="streetNumber"
                    type="number"
                    placeholder="Street Number"
                    value={propertyDetails.streetNumber}
                    onChange={handleChange}
                    required
                    />
                    <Form.Input
                    name="streetName"
                    placeholder="Street Name"
                    value={propertyDetails.streetName}
                    onChange={handleChange}
                    required
                    />
                     <Form.Input
                    name="city"
                    placeholder="City"
                    value={propertyDetails.city}
                    onChange={handleChange}
                    required
                    />
                    <Form.Input
                    name="state"
                    placeholder="State"
                    value={propertyDetails.state}
                    onChange={handleChange}
                    required
                    />
                    <Form.Input
                    name="zip"
                    type="number"
                    placeholder="Zip Code"
                    value={propertyDetails.zip}
                    onChange={handleChange}
                    required
                    />
                    <Form.Input
                    fluid label="Voucher Holder"
                    name="voucherHolder"
                    placeholder="Voucher Holder"
                    value={propertyDetails.voucherHolder}
                    onChange={handleChange}
                    required
                    />
                    <Form.Input
                    fluid label="Tenant ID Number"
                    name="tenantIdNumber"
                    type="number"
                    placeholder="Tenant Id Number"
                    value={propertyDetails.tenantIdNumber}
                    onChange={handleChange}
                    required
                    />
                    <Form.Input
                    fluid label="Property Owner"
                    name="propertyOwner"
                    placeholder="Property Owner"
                    value={propertyDetails.propertyOwner}
                    onChange={handleChange}
                    required
                    />
                    <Form.Input
                    fluid label="Neighborhood Census Track"
                    name="censusTrack"
                    type="number"
                    placeholder="Census Track"
                    value={propertyDetails.censusTrack}
                    onChange={handleChange}
                    required
                    />
                    <Button type="submit" className="btn" color="black">
                    CREATE PROPERTY
                    </Button>
                </Segment>
                {error ? <ErrorMessage error={error} /> : null}
                </Form> 
            </Grid.Column>
        </Grid>
    );
}