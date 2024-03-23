
import tokenService from './tokenService';

const BASE_URL = 'api/requests';

async function createRequest(requestToSendToServer, propertyId) {
    console.log(requestToSendToServer, "requestToSendToServer")


    try {
        const response = await fetch(`/api/property/${propertyId}/requests`, {
            method: 'POST',
            body: JSON.stringify(requestToSendToServer),
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + tokenService.getToken()
            }

        })
        return response.json();

        console.log(data, 'response from post request! This is from express')
    } catch (err) {
        console.log(err.message)
        console.log('CHECK YOUR SERVER TERMINAL INSPECTION REQUEST FAILED')
    }
} 
function getRequestInspection(){
    return tokenService.getPropertyFromToken();
}

export default {
    createRequest,
    getRequestInspection,
};