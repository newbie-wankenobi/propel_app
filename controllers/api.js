var Classroom = require('../models/classroom');

module.exports = {
  classroomCreate: classroomCreate
};

var code = "";

function classroomCreate(req, res, next) {

  console.log("Create route cool");
  console.log(req.body);
  console.log("end body");


  var code = "";
  //supply new classCode to newclassroom
  Classroom.find({}, function(err, classrooms) {
    if (err) {
      res.send(err);
    } else {
      code = compareCode(classrooms);
      console.log("12345", code);
      return code;
    } //then send it to the db
  }).then( function() {
    console.log("xxxxxxxxx",code);
    var classroom = new Classroom({
      type            : req.body.type,
      name            : req.body.name,
      admins          : [req.body.creator],
      description     : req.body.description,
      classCode       : code
      // classroom.admins.push(req.body.admins);
      // classroom.professionals   = req.body.professionals;
    });

    console.log("added stuff", classroom)
    classroom.save(function(err, savedClassroom){
      console.log("saved", savedClassroom);
      if (err) {
        console.log(err);

        res.send (err);
      } else {
        res.json(savedClassroom);
      }
    })
  });

};


//supply new classCode to newclassroom
// function makeThreadId() {
//   console.log("only once??")
//   var code = "";
//   Classroom.find({}, function(err, classrooms) {
//     if (err) {
//       res.send(err);
//     } else {
//       code = compareCode(classrooms);
//       console.log("12345", code);
//       return code;
//     }
//   });
// }

//generating random classcode
function generateClassCode() {
    var code = "";
    var keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i=0; i < 6; i++ ) {
      code += keys.charAt(Math.floor(Math.random() * keys.length));
    }
    return code;
}

//compare new classCode with existing classCode
function compareCode(classrooms) {
    var classCode = generateClassCode();
    var cc = classrooms.filter(function(room){
      return classCode === room
    });
    if (cc[0] === classCode) {
      compareCode(classrooms);
    } else {
      return classCode;
    }
}