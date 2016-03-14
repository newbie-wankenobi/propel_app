var Classroom = require('../models/classroom');

module.exports = {
  classroomCreate: classroomCreate
};

function classroomCreate(req, res, next) {

  var classroom = new Classroom();

  classroom.type            = req.body.type;
  classroom.name            = req.body.name;
  classroom.creator         = req.body.creator;
  classroom.admins          = req.body.admins;
  classroom.description     = req.body.description;
  classroom.classCode       = makeThreadId();
  // classroom.professionals   = req.body.professionals;

  classroom.save(function(err, savedClassroom){
    if (err) {
      res.send (err);
    } else {
      res.json(savedClassroom);
    }
  })
};


//supply new classCode to newclassroom
function makeThreadId() {
  Classroom.find({}, function(err, classrooms) {
    if (err) {
      res.send(err);
    } else {
      classCode = compareCode(classrooms);
      return classCode;
    }
  });
}

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
    if (cc === classCode) {
      compareCode(classrooms);
    } else {
      return classCode;
    }
}

// function compareCode(classrooms) {
//     var classCode = generateClassCode();
//     classrooms.forEach(function(classroom){
//           if (classroom.classCode === classCode) {
//             compareCode(classrooms);
//           }
//         return classCode;
//     });
// }

// for (var i = 0; i < classrooms.length; i++) {
//       if (classrooms[i] === classCode) {
//         console.log(classCode);
//         compareCode(classrooms);
//       } else{
//         console.log(classCode);
//         return classCode;
//       }


