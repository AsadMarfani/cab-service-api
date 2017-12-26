var express = require('express');
var users =  require('../features/users/user.router');
var company = require('../features/company/company.router');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;
var verify = require('../server/verify');

module.exports = function (app, config, models) {
  var router = express.Router();

  router.use('/users',users);
  router.use('/company', company);




  app.use('/api', router);
};
