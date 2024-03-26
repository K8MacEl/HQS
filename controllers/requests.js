const mongoose = require("mongoose");
const PropertyModel = require("../models/property");
const UserModel = require("../models/user");

module.exports = {
    createRequest,
}


const { v4: uuidv4 } = require('uuid');
// uuid, helps generate our unique ids
const S3 = require('aws-sdk/clients/s3');
// initialize the S3 consturctor function to give us the object that can perform crud operations to aws
const s3 = new S3();

const BUCKET_NAME = process.env.S3_BUCKET

async function createRequest(req, res) {
  //to find the property!
  console.log('====================================')
  console.log(req.body, "< ---- req.body THIS IS IN REQUESTS CONTROLLER")
  console.log('====================================')
  try {
      const property = await PropertyModel.findById(req.params.id)

      if(!property){
        return res.status(404).json({ error: "PROPERTY NOT FOUND!"});
      }
     
      //req.params.id comes from the http request from the projects show page from the routes/projects route
      property.inspectionRequest.push(req.body)
      await property.save()
      res.json(property)

  } catch (err) {
      console.log(err);
      res.send(err);
  }
}