var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  type: String,
  name:   String,
  lastName: String,
  handle: String,
  email: String,
  institution: String,
});

var User = mongoose.model('User', userSchema);

module.exports = User;
