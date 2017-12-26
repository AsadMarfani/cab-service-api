var express = require('express');
var router = express.Router();
var cmpnyCtrl = require('./company.controller.js');
var log = require('tracer').console({format: "{{message}}  - {{file}}:{{line}}"}).log;
var verify = require('../../server/verify');

// GET companies
router.get('/', verify.user, userCtrl.listAll);

//Add user
// router.post('/register', cmpnyCtrl.register);

//Login
// router.post('/login', userCtrl.login);

//Logout
// router.get('/logout', userCtrl.logout);

//Verify me
// router.get('/me', verify.nocache, verify.user, verify.unseal, userCtrl.verifyUser);

module.exports = router;