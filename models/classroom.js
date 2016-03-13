var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var commentSchema = new mongoose.Schema({
  author: {},
  body: {},
  createdAt: {},
  comments: [this]
});

var answerSchema = new mongoose.Schema({
  author: {},
  body: {},
  createdAt: {},
  comments: [commentSchema]
});

var questionSchema = new mongoose.Schema({
  author: {},
  body: {},
  createdAt: {},
  answers: [answerSchema]
});

var classroomSchema = new mongoose.Schema({
  type: {},
  name: {},
  creator: {},
  admins: {},
  students: {},
  professionals: {},
  questions: {}
});

var Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
