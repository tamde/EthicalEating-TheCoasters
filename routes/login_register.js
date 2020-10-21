/* Login, register route */

var express = require('express');
var router = express.Router();
var mysql = require('./dbcon.js');

router.get('/login_register', function(req, res, next) {
  res.render('login_register');
});

router.post('/login', function(req, res, next) {
  
  var context = {};
  context.log_username = req.body['log_username'];
  context.log_password = req.body['log_password'];
  
  // Print the values from form to the console
  console.log("log_username: " + context.log_username);
  console.log("log_password: " + context.log_password);
  
});

router.post('/register', function(req, res, next) {
  
  var context = {};
  context.reg_username = req.body['reg_username'];
  context.reg_password = req.body['reg_password'];
  context.reg_nickname = req.body['reg_nickname'];
  
  
  // Print the values from form to the console
  console.log("reg_username: " + context.reg_username);
  console.log("reg_password: " + context.reg_password);
  if (context.reg_nickname) {
    console.log("reg_nickname: " + context.reg_nickname);
  }
  
});

module.exports = router;