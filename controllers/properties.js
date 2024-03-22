const PropertyModel = require("../models/property");
const UserModel = require("../models/user");



module.exports = {
  create,
  index,
  show,
  delete: deleteProperty,
};

const { v4: uuidv4 } = require('uuid');
// uuid, helps generate our unique ids
const S3 = require('aws-sdk/clients/s3');
// initialize the S3 consturctor function to give us the object that can perform crud operations to aws
const s3 = new S3();

const BUCKET_NAME = process.env.S3_BUCKET

async function create(req, res) {
  //to find the property!
  console.log('====================================')
  console.log(req.body, "< ---- req.body")
  console.log('====================================')
  try {
      const user = await UserModel.findOne({userId: req.user._id})
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
 

async function index(req, res) {
  try {
    // this populates the user when you find the posts
    // so you'll have access to the users information
    // when you fetch the properties
    const properties = await PropertyModel.find({}).populate("userId");
    res.status(200).json(properties);
  } catch (err) {
    res.json({ error: err })
  }
}

async function show(req, res) {
  try {
      const propertyDoc = await PropertyModel.findById(req.params.propertyId)
      console.log(propertyDoc);
      if (!propertyDoc) {
          return res.status(404).json({message: "property not found"});
      }
      res.json({ propertyDoc });
    
  } catch (err) {
      console.log(err, "cant get to customer show page")
      res.json({err});
  }
}

async function deleteProperty(req, res){
  try {
      
      const post = await PropertyModel.deleteOne({'_id': req.params.propertyId});
      res.json({data: "property deleted"})
  } catch(err){
      res.status(400).json({err})
  }
}