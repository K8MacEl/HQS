import tokenService from './tokenService';

const BASE_URL = 'api/properties';

async function create(propertyToSendToServer){
	console.log(propertyToSendToServer, "propertyToSendToServer")

	try {
		// Since we are sending a photo
		// we are sending a multipart/formdData request to express
		// so express needs to have multer setup on this endpoint!
		const response = await fetch('/api/properties', {
			method: 'POST',
			body: JSON.stringify(propertyToSendToServer),
			headers: {
                'Content-Type': 'application/json',

					// convention for sending jwts, tokenService is imported above
					Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage 
					//and and it to our api request
					// so the server knows who the request is coming from when the client is trying to make a POST
				}
		})
        const data = await response.json();
		//       res.status(201).json({ post }); this value is from express/posts/create controller
		console.log(data, ' response from post request! This from express')
		setProperties([data.property, ...properties])
		console.log("this is properties--->", properties)
	} catch(err){
		console.log(err.message)
		console.log('CHECK YOUR SERVER TERMINAL!!!!')
	}

  }

  function getProperty() {
	return tokenService.getPropertyFromToken();
  }

  export default {
    create,
	getProperty,
  };