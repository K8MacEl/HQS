const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  streetNumber: Number,
  streetName: String,
  unitNumber: String,
  city: String,
  stateProperty: String,
  zip: Number,
  voucherHolder: String,
  tenantIdNumber: String,
  // inspections: [inspectionSchema],
  propertyOwner: String,
  censusTrack: Number,
  
  // One PHA Role User has many properties, referencing because we have user model, so we can get the users information when we need it
  //
  userId: { type: mongoose.Schema.Types.ObjectId }, //confirm this pulls PHA name
});

const inspectionSchema =mongoose.Schema({
  status: String,
  dateOfRequest: Date,
  //embed inspector here ref:user
  dateofLastRequest: Date,
  //embed PHA here
  numOfChildren: Number,
  housingType: String,
  numOfBeds: Number,
  numOfSleeping: Number,
  summaryOffDecision: String,
})

const livingRoomSchema = mongoose.Schema ({
  livingRoomPresent: String,
  livingRoomPresentComment: String,
  livingRoomPresentDate: Date,
  electricityPresent: String,
  electricityPresentComment: String,
  electrictyPresentDate: Date,
  securityPresent: String,
  securityPresentComment: String,
  securityPresentDate: Date,
  windowCondition: String,
  windowConditionComment: String,
  windowConditionDate: Date,
  ceilingCondition: String,
  ceilingConditionComment: String,
  ceilingConditionDate: Date,
  wallCondition: String,
  wallConditionComment: String,
  wallConditionDate: Date,
  floorCondition: String,
  floorConditionComment: String,
  floorConditionDate: Date,
  leadPaint: String,
  leadPaintComment: String,
  leadPaintDate: Date,
})

const kitchenSchema = mongoose.Schema ({
  kitchenPresent: String,
  kicthenPresentComment: String,
  kitchenPresentDate: Date,
  electricityPresent: String,
  electricityPresentComment: String,
  electrictyPresentDate: Date,
  securityPresent: String,
  securityPresentComment: String,
  securityPresentDate: Date,
  windowCondition: String,
  windowConditionComment: String,
  windowConditionDate: Date,
  ceilingCondition: String,
  ceilingConditionComment: String,
  ceilingConditionDate: Date,
  wallCondition: String,
  wallConditionComment: String,
  wallConditionDate: Date,
  floorCondition: String,
  floorConditionComment: String,
  floorConditionDate: Date,
  leadPaint: String,
  leadPaintComment: String,
  leadPaintDate: Date,
  stoveOrRange: String,
  stoveOrRangeComment: String,
  stoveOrRangeDate: Date,
  refrigerator: String,
  refrigeratorComment: String,
  refrigeratorDate: Date,
  sink: String,
  sinkComment: String,
  sinkDate: Date,
  foodStorage: String,
  foodStorageComment: String,
  foodStorageDate: Date,
})

module.exports = mongoose.model("Property", propertySchema);