var log = require('tracer').console({format: "{{message}}  - {{file}}:{{line}}"}).log;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Company = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    name: String,
  }
}, {timestamps: true});

module.exports = mongoose.model('Company', Company);