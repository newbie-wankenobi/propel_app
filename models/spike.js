// Node.js repl spiking

// require mongoose
var mongoose = require('mongoose');

// require data models
var User = require('./user');
var Classroom = require('./classroom');

// connect to mongodb
mongoose.connect('mongodb://localhost/propel_app');

var users;
var classrooms;

User.find({})

.then(function(foundUsers) {
  users = foundUsers;
  users.forEach(user => console.log(user));
})

.then(function() {
  Classroom.find({})

    .then(function(foundClassrooms) {
      classrooms = foundClassrooms;
      classrooms.forEach(classroom => console.log(classroom));
    })

    .catch(function(err) {
      console.log("ERROR: ", err);
    })

    .then(closeMongoConnection, closeMongoConnection)
});



function closeMongoConnection() {
  mongoose.connection.close(function(err) {
    if (err) console.log(err);
    // debug in Terminal, Node.js repl:
      // node debug spike.js
      // cont
      // repl
    debugger; // Node.js debug breakpoint
    // process.exit(0);
  });
}
