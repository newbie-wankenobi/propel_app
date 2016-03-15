var express = require('express'),
    router  = new express.Router(),
    passport = require('passport');

// Require controllers.
var pagesController = require('../controllers/pages');
var apiController   = require('../controllers/api');

// main page after log in
router.get('/welcome', pagesController.welcome);
router.get('/test', pagesController.test);

// root path:
router.get('/', function(req, res){
  res.render('index', {user: req.user});
});

router.get('/auth/linkedin',
  passport.authenticate('linkedin',
    function(req, res) {}
  ));

router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/'
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


// API ROUTES

// Users Resource
router.get('/api/users',       apiController.usersIndex);

// Classrooms Resource
router.get('/api/classrooms',  apiController.classroomIndex);
router.post('/api/classrooms', apiController.classroomCreate);

module.exports = router;
