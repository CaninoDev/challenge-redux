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