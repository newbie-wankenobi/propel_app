// Export objects below for spiking data model with Node.js repl in terminal:
// `$ node`
// `$ var spike = require('./models/modelsSpike.js');`
module.exports = {
  getUsers: function() {return users},
  getClassrooms: function() {return classrooms}
};

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
  // return users;
})

.then(function() {
  Classroom.find({})

    .then(function(foundClassrooms) {
      classrooms = foundClassrooms;
      classrooms.forEach(classroom => console.log(classroom));
      // return classrooms;
    })

    .catch(function(err) {
      console.log("ERROR: ", err);
    })

    .then(closeMongoConnection, closeMongoConnection)
});



function closeMongoConnection() {
  mongoose.connection.close(function(err) {
    if (err) console.log(err);
    return classrooms, users;
  });
}
