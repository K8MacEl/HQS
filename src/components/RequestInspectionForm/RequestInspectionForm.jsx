import { useState, useEffect } from "react"


const options = [
    { key: 'i', text: 'Initial', value: 'initial' },
    { key: 's', text: 'Special', value: 'special' },
    { key: 'r', text: 'Reinspection', value: 'reinspection' }
]

export default function RequestInspectionForm() {
    const [requestDetails, setRequestDetails] = useState({
        requestInspection: "",
    })

    async function handleSubmit() {
        e.preventDefault();
        try {
            const data = await requestService.create(requestDetails);
            console.log("this is data for creating request", data)
            setRequestDetails(data.requestDoc);
            navigate(`/${propertyId}`);
        } catch (err) {
            console.log(err.message, "<---this comes from the the throw in utils/create");
            setError("Check your terminal for errors!!!");
        }
    }

    //HANDLECHANGE?!!!???
    useEffect(() => {
        getProperty()
    }, [])

    return (
        <>
            <Grid className="request_inspection" textAlign="center"
                autoComplete="off">
                <div>
                    INSPECTION REQUEST
                </div>
                <Form
                    autoComplete="off"
                    onSubmit={handleSubmit} className="request_form">
                    <Form.Select
                        fluid label="Request Inspection"
                        name="requestInspection"
                        options={options}
                        onChange={handleChange}
                        value={requestDetails.requestInspection}
                        placeholder="Request"
                    />
                    <Button type="submit" className="request_btn" color="black">
                        SUBMIT REQUEST
                    </Button>
                </Form>
            </Grid>
        </>


    )


}
