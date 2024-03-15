const PostModel = require("../models/post");



module.exports = {
  create,
  index
};

const { v4: uuidv4 } = require('uuid');
// uuid, helps generate our unique ids
const S3 = require('aws-sdk/clients/s3');
// initialize the S3 consturctor function to give us the object that can perform crud operations to aws
const s3 = new S3();

const BUCKET_NAME = process.env.S3_BUCKET


function create(req, res) {
  console.log(req.file, req.body, req.user)
 
  res.json({data: 'Hitting the create route!'})
}

async function index(req, res) {
  try {
    // this populates the user when you find the posts
    // so you'll have access to the users information
    // when you fetch teh posts
    const posts = await PostModel.find({}).populate("user").exec();
    res.status(200).json({ posts });
  } catch (err) {
    res.json({error: err})
  }
}