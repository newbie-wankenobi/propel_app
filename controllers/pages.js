var Classroom = require('../models/classroom');

module.exports = {
  welcome: welcome,
  team:    team
};

function welcome(req, res, next) {
  res.render('pages/welcome', {user: req.user, page: "welcome"});
};

function team(req, res, next) {
  res.render('pages/team', {user: req.user, page: "team"});
}
