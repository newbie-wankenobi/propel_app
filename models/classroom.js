var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

// var tagSchema = new mongoose.Schema({
//   tags: [String]
// });

// var upvoteSchema = new mongoose.Schema({
//   voter:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
// });

var commentSchema = new mongoose.Schema({
  author:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body:      {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
});

var answerSchema = new mongoose.Schema({
  author:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body:      {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  upvotes:   [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  comments:  [commentSchema]
});

var questionSchema = new mongoose.Schema({
  author:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body:      {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  upvotes:   [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  tags:      [String],
  answers:   [answerSchema]
});

var classroomSchema = new mongoose.Schema({
  assignId:      {type: String, required: true, default: 'ASSIGNID'},
  type:          {type: String, required: true, enum: ['course', 'subject-thread', 'industry-thread'], default: 'course'},
  name:          {type: String, required: true},
  createdAt:     {type: Date, default: Date.now},
  creator:       {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  admins:        [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  students:      [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  professionals: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  questions:     [questionSchema]
  // schedule:   {days: [String], startDate: Date, endDate: Date, startTime: Number, endTime: Number},
  // syllabus:   String,
  // lessons:    [String],
});

var Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
