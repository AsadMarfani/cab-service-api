var log = require('tracer').console({format: "{{message}}  - {{file}}:{{line}}"}).log;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: String,
  password: String,
  OauthId: String,
  OauthToken: String,
  firstname: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  // admin: {
  //   type: Boolean,
  //   default: false
  // },
  role: {
    type: Number, // 0 -> normal user, 1 -> driver, 2 -> admin, 3 -> owner
    default: 0
  },
  status: {
    type: Number, // 0 -> free state , 1 -> busy state
    default: 0
  },
  resetToken: {
    type: String,
    default: ''
  },
  company : {
    type: mongoose.Types.ObjectId,
    ref: 'Company'
  }
}, {timestamps: true});

User.methods.getName = function () {
  return (this.firstname + ' ' + this.lastname);
};

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);