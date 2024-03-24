const mongoose = require("mongoose");
const PropertyModel = require('../models/property');
const UserModel = require("../models/user");

module.exports = {
    create
}

async function create(req, res){

	try {
		const propertyDoc = await PropertyModel.findById(req.params.id)
		propertyDoc.inspections.push({username: req.user.username, userId: req.user._id}); //mutating a document
		await propertyDoc.save()//save it
		res.status(201).json({data: "inspection added"}) //save the inspection
	} catch(err){
		console.log(err)
		res.status(400).json({err})
	}
}