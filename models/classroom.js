var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var commentSchema = new mongoose.Schema({
  author:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body:      {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  // comments: [this]
});

var answerSchema = new mongoose.Schema({
  author:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body:      {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  comments:  [commentSchema]
});

var questionSchema = new mongoose.Schema({
  author:    {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body:      {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  answers: [answerSchema]
});

var classroomSchema = new mongoose.Schema({
  type:          {type: String, required: true, enum: ['course', 'subject-thread', 'industry-thread'], default: 'course'},
  name:          {type: String, required: true},
  createdAt:     {type: Date, default: Date.now},
  creator:       {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  admins:        [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  students:      [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  professionals: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  questions:     [questionSchema],
  description:   {type: String, required: true},
  classCode:  {type: String, required: true}
  // schedule:   {days: [String], startDate: Date, endDate: Date, startTime: Number, endTime: Number},
  // syllabus:   String,
  // lessons:    [String],
});

var Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
