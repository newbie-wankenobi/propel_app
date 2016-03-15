var Classroom = require('../models/classroom');
var User = require('../models/user');


module.exports = {
  questionIndex: questionIndex,
  questionCreate: questionCreate
};


function questionIndex(res, req, next){
  Classroom.findById(id, function(classroom){
    if (err) {
      res.send(err);
    } else {
      var questions = classroom.questions
      res.json(questions);
    }
  });
}

function questionCreate(res, req, next){}

