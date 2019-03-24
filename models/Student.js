const mongoose = require('mongoose');

const schemaOptions = {
  timestamps: true
};

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  grade: {
    type: String,
    required: true
  }
}, schemaOptions);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;