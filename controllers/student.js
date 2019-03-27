var Student = require('../models/Student');

/**
 * GET /directory
 */
exports.directoryGet = function (req, res) {
  Student.find({}, function (err, directory) {
    if (err) {
      return res.status(400).send({ messages: 'There was an error processing your request: ' + err });
    }
    res.send({ directory });
  });
};

exports.studentPost = function (req, res) {
  Student.findOne({email: req.email}, function (err, student) {
    if (student) {
      return res.status(400).send({ messages: 'There is already a student associated with ' + req.email});
    } else if (err) {
      return res.status(400).send({ messages: 'There was an error:' + err});
    }
  });
  console.log(req.body);
  let newStudent = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age:  req.body.age,
    grade: req.body.grade
  });
  newStudent.save(function (err) {
    console.log(err);
    if (err) {
      return res.status(400).send({err})
    }
  });
};