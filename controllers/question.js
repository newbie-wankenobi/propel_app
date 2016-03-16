var Classroom = require('../models/classroom');
var User = require('../models/user');


module.exports = {
  questionIndex: questionIndex,
  questionCreate: questionCreate
};


function questionIndex(req, res, next){
  console.log(req.params.id);
  Classroom.findById(req.params.id, function(err, classroom){
    if (err) {
      res.send(err);
    } else {
      console.log(classroom);
      // var questions = classroom.questions
      res.json(classroom);
    }
  });
}

function questionCreate(res, req, next){}

