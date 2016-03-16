var Classroom = require('../models/classroom');

module.exports = {
  welcome: welcome,
  team: team,
  test: test,
  edituser: edituser,
  loginTest: loginTest,
  classroom: classroom
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

// check to see if the user is new or returning,
// then render respective page
// finally, on a client side js, CRUD data with
// AJAX calls to API and use returned JSON to render
// with jQ template strings and CSS selectors
function classroom(req, res, next) {
  res.render('pages/classroom', {user: req.user, page: ""});
}
// function classroom(req, res, next) {
//   switch (req.user.newUser) {
//     case true:
//       res.render('pages/classroom_new_user', {user: req.user, page: ""});
//       break;
//     case false:
//       res.render('pages/classroom', {user: req.user, page: ""});
//       break;
//   }
// }
