var path = require('path');
var express = require('express');
var router = express.Router();
var loginController = require('../core/loginController');
var loginController = require('../core/registerController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  console.log(loginController.connect())
  res.send("test");
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.resolve('views/auth/login.html'))
});

router.get('/register', function(req, res, next) {
  let result = register.save(
    { 
      username:"baluta",
      fname:"Prakhar", 
      lname:"Mathur",
      mobile:"9716273125",
      password:'1234'
    }, function(callback){
      
      res.send(callback)

    }
  );
  // console.log(result);
});

module.exports = router;
