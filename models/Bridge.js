var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var BridgesSchema = new Schema({ any: Schema.Types.Mixed });
var BridgesSchema = new Schema({
   year : Number,
   stateCode : String,
   structureNumber : String,
   inventoryRoute: {
                        recordType : String,
                        routeSigningPrefix : String,
                        designatedLevelOfService : String,
                        routeNumber : String,
                        directionalSuffix : String
                     },
   highwayAgencyDistrict : String,
   countyCode : Number,
   placeCode : Number,
   featuresIntersected: {
                             featuresIntersected : String,
                             criticalFacilityIndicator : String
                            },
   facilityCarriedByStructure : String,
   location : String,
   InventoryRTeMinVertClearance : String,

   kilometerpoint : String,
   baseHighwayPoint : Number,
   inventoryRouteSubrouteNumber: {
                                         LRSInventoryRoute : String
                                        },
   latitude : String,
   longitude : String,
   bypassDetourLength : String,
   toll : Number,
   maintenanceReponsibility : Number,
   owner : Number,
   functionalClassOfInventoryRte : String,
   yearBuilt : Number,
   lanesOnUnderStructure: {
                                  lanesOnStructure : String,
                                  lanesUnderStructure : String
                                },
   averageDailyTraffic : Number,
   yearOfAverageDailyTraffic : Number,
   designLoad : String,
   approachRoadwayWidth : String,
   bridgeMedian : Number,
   skew : String,
   structureFlared : Number,
   trafficSafetyFeatures: {
                                bridgeRailings : String,
                                transitions : String,
                                approachGuardrail : String,
                                approachGuardrailEnds : String
                               },

   historicalSignificance : Number,
   navigationControl : String,
   navigationVeriticalClearance : String,
   navigationHorizontalClearance : String,
   strucutreOpenPostedClosed : String,
   typeOfService:{
                       typeOfServiceOnBridge : String,
                       typeOfServiceUnderBridge : String
                     },

   structureTypeMain:{
                          kindOfMaterialDesign : String,
                          typeOfDesignConstruction : String
                          },
   structureTypeApproachSpans:{
                                     kindOMaterialDesign : String,
                                     typeOfDesignContruction : String
                                },

   numberOfSpansInMainUnit : Number,
   numberOfApproachSpans : Number,
   InventoryRteTotalHorzClearance : Number,
   lengthOfMaximumSpan : String,
   structureLength : String,
   "curbSidewalk Width": {
                            leftCurbSidewalkWidth : String,
                            rightCurbSidewalkWidth : String
                           },

   bridgeRoadwayWithCurbToCurb : Number,
   deckWidthOutToOut : Number,
   minVertClearOverBridgeRoadway : Number,
   minimumVeriticalUnderclearance: {
                                        referenceFeature : String,
                                        minimumVeriticalUnderclearance : String
                                       },
   minLateralUnderclearOnRight:{
                                       referenceFeature : String,
                                       minimumLateralUnderclearance : String
                                     },

   minLateralUnderclearOnLeft : String,
   deck : String,
   superstructure : String,
   substructure : String,
   channelChannelProtection : String,
   culverts : String,
   methodUsedToDetermineOperatingRating : Number,
   operatingRating : String,
   methodUsedToDetermineInventoryRating : Number,
   inventoryRating : String,
   structuralEvaluation : String,
   deckGeometry : String,
   underclearVerticalHorizontal : String,
   bridgePosting : Number,
   waterwayAdequacy : String,
   approachRoadwayAlignment : String,
   typeOfWork: {
                      typeOfWorkProposed : String,
                      WorkDoneBy : String
                   },
   lengthOfStructureImprovement : String,
   inspectionDate : Number,
   designatedInspectionFrequency : Number,
   criticalFeatureInspection: {
                                    fractureCriticalDetails : String,
                                    underwaterInspection : String,
                                    otherSpecialInspection : String
                                  },
   criticalFeatureInspectionDates: {
                                          fractureCiritcalDetailsDate : String,
                                          underwaterInspectionDate : String,
                                          OtherSpecialInspectionDate : String
                                        },

   bridgeImprovementCost : String,
   roadwayImprovementCost : String,
   totalProjectCost : String,
   yearOfImprovementCost : Number,
   borderBridge: {
                       neighboringStateCode : String,
                       percentReponsibility : String
                    },
   borderBridgeStructureNumber : Number,
   STRAHNETHighwayDesignation : String,
   parallelStructureDesignation : String,
   directionOfTraffic : Number,
   temporaryStructureDesignation : String,
   highwaySystemOfInventoryRoute : Number,
   federalLandsHighways : Number,
   yearReconstructed : Number,
   deckStructureType : String,
   "wearingSurface/ProtectiveSystem" : {
                                           typeOfWearingSurface : String,
                                           typeOfMembrane :String,
                                           deckProtection :String
                                         },
   avgDailyTruckTraffic : Number,
   designatedNationalNetwork : Number,
   "pier/abutmentProtection" : Number,
   nbisBridgeLength : String,
   scourCriticalBridges : String,
   futureAvgDailyTraffic : String,
   yearOfFutureAvgDailyTraffic : Number,
   minimumNavigationVerticalClearanceVerricalLiftBridge : String,
   federalAgencyIndicator : String,
   dateLastUpdate : String,
   typeLastUpdate : String,
   deductCode : String,

   "status with 10 year rule" : String,
   sufficiencyRatingAsteriskField : String,
   sufficiencyRating : String,
   "status without 10 year rule" : String,
   loc:{
           type: String,
           coordinates:[ {type: Number}]
        }

});

module.exports = mongoose.model('Bridge', BridgesSchema);