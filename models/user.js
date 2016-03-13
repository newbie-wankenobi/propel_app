var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  type:                     {type: String, required: true, enum: ['student', 'instructor', 'professional'], default: 'student'},
  linkedInId:               {type: String, required: true, default: null},
  linkedInPublicProfileUrl: {type: String, required: true, default: null},
  firstName:                {type: String, required: true},
  lastName:                 {type: String, required: true},
  emailAddress:             {type: String, required: true},
  institution:              {type: String, required: true},
  location:                 {name: String, countryCode: String}
});

// creating an instance method for the userSchema
// http://mongoosejs.com/docs/guide.html#methods
userSchema.methods.isStudent = function() {
  if (this.type === 'student') return true;
  return false;
};

var User = mongoose.model('User', userSchema);

module.exports = User;
