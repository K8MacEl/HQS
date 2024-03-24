import tokenService from "./tokenService";
import propertyService from "./propertyService";

const BASE_URL = 'api/properties';

async function handleAddInspection(propertyToSendToServer){
    console.log(propertyToSendToServer, "formData from addInspection form")
    try {
        const response = await fetch('/api/properties/', {
            method: 'POST',
            body: JSON.stringify(propertyToSendToServer),
            headers: {
                'Content-Type' : 'application/json',
                    Authorization: "Bearer " + tokenService.getToken()
            }
        })
        return response.json();
        console.log(fromData)
    } catch (err){
        console.log(err.message)
        console.log("CHECK YOUR SERVER TERMINAL ERROR IN HANDLEADDINSPECTION")
    }
}

export default {
    handleAddInspection
};