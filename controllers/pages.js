var Classroom = require('../models/classroom');

module.exports = {
  welcome: welcome,
  team: team,
  firstTimeLogin: firstTimeLogin,
  test: test,
  edituser: edituser
};

function welcome(req, res, next) {
  res.render('pages/welcome', {user: req.user, page: "welcome"});
}

function team(req, res, next) {
  res.render('pages/team', {user: req.user, page: "team"});
}

function firstTimeLogin(req,res,next) {
  res.render('pages/first-time-login', {user: req.user, page: "first-time-login"});
}

function test(req, res, next) {
  res.render('pages/test', {user: req.user, page: "team"});
}

function edituser(req, res, next) {
  res.render('pages/edituser', {user: req.user, page: ""});
}
