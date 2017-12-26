var Company = require ('./company.model.js');
// var passport = require('passport');
var Verify = require ('../../server/verify.js');
var log = require ('tracer').console ({format: '{{message}}  - {{file}}:{{line}}',
}).log;
var auth = require ('../../server/auth');

exports.listAllCompanies = function (req, res, next) {
  Company.find ({}, function (err, details) {
    if (err) throw err;
    res.json (users);
  });
};
