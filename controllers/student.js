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
  req.assert('firstname', 'First name cannot be blank').notEmpty();
  req.assert('lastname', 'Last name cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }
  Student.findOne({email: req.email}, function (err, student) {
    if (student) {
      return res.status(400).send({ messages: 'There is already a student associated with ' + req.email});
    } else if (err) {
      return res.status(400).send({ messages: 'There was an error:' + err});
    }
  })
  let newStudent = new Student({
    firstName: req.firstname,
    lastName: req.lastName,
    email: req.email,
    age:  req.age,
    grade: req.grade
  });
  newStudent.save(function (err) {
    return res.status(400).send({ messages: 'There was an error: ' + err })
  });
  res.send({newStudent});
}