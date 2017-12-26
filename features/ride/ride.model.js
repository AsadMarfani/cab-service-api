var log = require('tracer').console({format: "{{message}}  - {{file}}:{{line}}"}).log;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ride = new Schema({
  leavingTime : {
    type: Date,
  },
  arrivalTime: {
    type: Date
  },
  driver: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  car: {
    type: mongoose.Types.ObjectId,
    ref: 'assetcar'
  }
}, {timestamps: true});

module.exports = mongoose.model('rideacc');