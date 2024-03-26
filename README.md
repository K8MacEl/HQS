
<a href="https://imgur.com/1Tg73Vq"><img src="https://i.imgur.com/1Tg73Vqb.png" title="source: imgur.com" /></a>


# HQSpec


HQSpec is a web based application that improves efficiencies with the process of Public Housing Authorities (PHAs) requesting inspections for Housing Choice Voucher properties. The PHA may create a property with details from the voucher holder. Then when needed the PHA may submit a request for an inspection and select the type of the inspection needed and the HQS Inspector may log in and view requests.


## Getting Started
#### TO USE THE WEB APP: https://hqspec.onrender.com
At sign in Users are to pick a role of either PHA or Inspector, from there when the User logs in they will be directed to either the PHA or Inspector profile page. The PHA will be able to create new properties from there whereas the Inspector views properties and requests.

<a href="https://imgur.com/r9h6Vnh"><img src="https://i.imgur.com/r9h6Vnhl.png" title="source: imgur.com" /></a>


## Technologies Used
This is a full stack MERN project with MongoDB, Express, React, and Node.js as well as AWS for logins. Additionally, Semantic IU React as well as CSS was used for styling the input forms.


### This relationship of resources is the following:
#### -One user has one profile (with a role of either PHA or Inspector)
#### -One PHA Role User can have MANY properties
#### -One property can have MANY inspection requests


### This a CRD program with the following:
#### CREATE FUNCTIONS: There is a create for a user, a property, and a request.
<a href="https://imgur.com/r8rYILV"><img src="https://i.imgur.com/r8rYILVl.png" title="source: imgur.com" /></a>
#### READ: There is a read for the user's profile and the property, additionally there is a full index option to see all properties entered.
<a href="https://imgur.com/RFi1E5I"><img src="https://i.imgur.com/RFi1E5Im.png" title="source: imgur.com" /></a>
#### DELETE: There is a delete function for the property
<a href="https://imgur.com/NhwXwiz"><img src="https://i.imgur.com/NhwXwizl.png" title="source: imgur.com" /></a>



## IceBox Items
#### -Inspection Feature to allow the Inspectors to complete the HQS form through the application.
#### -Picture upload feature to AWS for inspections.
#### PDF-Lib API installation so the completed inspection will populate into the required HUD PDF Form.
#### -API to auto-populate the census track field based on the address inputted.
#### -Enhanced security features including stronger password requirements and a forgotten password feature.
#### -Search and filter features for properties.
