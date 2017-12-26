var log = require ('tracer').console ({
  format: '{{message}}  - {{file}}:{{line}}',
}).log;
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var Asset = new Schema ({
  model: {
    type: String,
  },
  number: {
    type: String,
    required: true,
  },
  status: {
    type: Number, // 0 -> free state , 1 -> busy state
    default: 0,
  },
}, {timestamps: true});

module.exports = mongoose.model ('asset', Asset);
