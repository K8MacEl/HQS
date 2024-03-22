const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  requestInspection: String,
  requestorId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  requestionName: String,
  inspectorId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  inspectorName: String, 
},
  {
    timestamps: true,
  }
);

const propertySchema = mongoose.Schema({
  streetNumber: Number,
  streetName: String,
  unitNumber: String,
  city: String,
  stateProperty: String,
  zip: Number,
  voucherHolder: String,
  tenantIdNumber: String,
  propertyOwner: String,
  censusTrack: Number,
  inspectionRequest: [requestSchema],
  // inspections: [inspectionSchema],
  
  // One PHA Role User has many properties, referencing because we have user model, so we can get the users information when we need it
  //
  userId: { type: mongoose.Schema.Types.ObjectId }, //confirm this pulls PHA name
},
  {
    timestamps: true,
  }

);

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

const bathroomSchema = mongoose.Schema ({
  bathroomPresent: String,
  bathroomPresentComment: String,
  bathroomPresentDate: Date,
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
  flushToilet: String,
  flushToiletComment: String,
  flushToiletDate: String,
  washBasin: String,
  washBasinComment: String,
  washBasinDate: Date,
  tubOrShower: String,
  tubOrShowerComment: String,
  tubOrShowerDate: Date,
  ventilation: String,
  ventilationComment: String,
  ventilationDate: Date,
})

const otherRoomSchema = mongoose.Schema ({
  roomCode: String,
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

const secondaryRoomSchema = mongoose.Schema ({
  none: String,
  noneComment: String,
  noneDate: Date,
  securityPresent: String,
  securityPresentComment: String,
  securityPresentDate: Date,
  electricityPresent: String,
  electricityPresentComment: String,
  electrictyPresentDate: Date,
  otherHazard: String,
  otherHazardComment: String,
  otherHazardDate: Date,
})

const exteriorSchema = mongoose.Schema ({
  foundation: String,
  foundationComment: String,
  foundationDate: Date,
  stairsRailsPorches: String,
  stairsRailsPorchesComment: String,
  stairsRailsPorchesDate: Date,
  roofGutters: String,
  roofGuttersComments: String,
  roofGuttersDate: Date,
  exteriorSurfaces: String,
  exteriorSurfacesComments: String,
  exteriorSurfacesDate: Date,
  chimney: String,
  chimneyComment: String,
  chimneyDate: Date,
  leadPaint: String,
  leadPaintComment: String,
  leadPaintDate: Date,
  tieDowns: String,
  tieDownsComment: String,
  tieDownsDate: Date,
})

const heatingAndPlumbingSchema = mongoose.Schema ({
  safety: String,
  safetyComment: String,
  safetyDate: Date,
  ventilation: String,
  ventilationComment: String,
  ventilationDate: Date,
  waterHeater: String,
  waterHeaterComment: String,
  waterHeaterDate: Date,
  waterSupply: String,
  waterSupplyComment: String,
  waterSupplyDate: Date,
  sewerConnection: String,
  sewerConnectionComment: String,
  sewerConnectionDate: Date,
  plumbing: String,
  plumbingComment: String,
  plumbingDate: Date,
})

const healthAndSafety = mongoose.Schema ({
  access: String,
  accessComment: String,
  accessDate: Date,
  fireExits: String,
  fireExitsComment: String,
  fireExitsDate: Date,
  infestation: String,
  infestationComment: String,
  infestationDate: String,
  garbageDebris: String,
  garbageDebrisComment: String,
  garbageDebrisDate: Date,
  disposal: String,
  disposalComment: String,
  disposalDate: Date,
  interiorStairs: String,
  interiorStairsComments: String,
  interiorStairsDate: Date,
  interiorHazard: String,
  interiorHazardComment: String,
  interiorHazardDate: Date,
  neighborhood: String,
  neighborhoodComments: String,
  neighborhoodDate: Date,
  leadPaint: String,
  leadPaintComment: String,
  leadPaintDate: Date,
})

module.exports = mongoose.model("Property", propertySchema);