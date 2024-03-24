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
      const user = await PropertyModel.findOne({proertyId: req.user._id})
      req.body.propertyUser = user._id
      //req.params.id comes from the http request from the projects show page from the routes/projects route
      const propertyDoc = await PropertyModel.create(req.body);
      console.log(propertyDoc)
      res.json({propertyDoc})

  } catch (err) {
      console.log(err);
      res.send(err);
  }
}