var Classroom = require('../models/classroom');

module.exports = {
  welcome: welcome,
  team: team,
  test: test,
  edituser: edituser,
  loginTest: loginTest
};

function welcome(req, res, next) {
  res.render('pages/welcome', {user: req.user, page: "welcome"});
}

function team(req, res, next) {
  res.render('pages/team', {user: req.user, page: "team"});
}

function test(req, res, next) {
  res.render('pages/test', {user: req.user, page: "team"});
}

function edituser(req, res, next) {
  res.render('pages/edituser', {user: req.user, page: ""});
}

function loginTest(req, res, next) {
  res.render('pages/first_time_login', {user: req.user, page: ""});
}
