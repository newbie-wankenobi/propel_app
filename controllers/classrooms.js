// Require resource's model(s).
var Classroom = require("../models/classroom");

var index = function(req, res, next){
  Classroom.find({}, function(err, classrooms) {
    if (err) {
      res.json({message: err});
    } else {
      res.render('classrooms/index', {classrooms: classrooms});
    }
  });
};

var show = function(req, res, next){
  Classroom.findById(req.params.id, function(err, classroom) {
    if (err) {
      res.json({message: 'Could not find classroom because ' + err});
    } else if (!classroom) {
      res.json({message: 'No classroom with this id.'});
    } else {
      res.render('classrooms/show', {classroom: classroom});
    }
  });
};

module.exports = {
  index: index,
  show:  show
};
