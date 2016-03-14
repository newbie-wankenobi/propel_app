var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');
var apiController   = require('../controllers/api');


// main page after log in
router.get('/welcome', pagesController.welcome);


// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);


//api routes
// router.get('api/classrooms', apiController.classroomIndex);
router.post('/api/classrooms', apiController.classroomCreate);

module.exports = router;
