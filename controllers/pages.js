var Classroom = require('../models/classroom');

function welcome(req, res, next) {
  res.render('pages/welcome');
};

module.exports = {
  welcome: welcome,
};
