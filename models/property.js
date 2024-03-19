const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  streetNumber: Number,
  streetName: String,
  unitNumber: String,
  city: String,
  state: String,
  voucherHolder: String,
  tenantIdNumber: String,
  // inspections: [inspectionSchema],
  propertyOwner: String,
  censusTrack:String,
  
  // One PHA Role User has many properties, referencing because we have user model, so we can get the users information when we need it
  //
  userId: { type: mongoose.Schema.Types.ObjectId }, //confirm this pulls PHA name
});

module.exports = mongoose.model("Property", propertySchema);