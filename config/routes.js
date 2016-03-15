var express = require('express'),
    router  = new express.Router(),
    passport = require('passport');

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');
var apiController   = require('../controllers/api');

//testing page
router.get('/test', pagesController.test);



// main page after log in
router.get('/welcome', pagesController.welcome);


// root path:
router.get('/', function(req, res){
  res.render('index', {user: req.user});
});


router.get('/auth/linkedin',
  passport.authenticate('linkedin',
    function(req,res){}
  ));

router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/'
}));

router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
});


//api routes
router.get('/api/classrooms', apiController.classroomIndex);
router.post('/api/classrooms', apiController.classroomCreate);

module.exports = router;
