const express = require('express');
const router = express.Router();
const Joi = require('joi');
const db = require('../../assets/mysqlconnection');

// get times from id
router.get('/:id', (req, res) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      res.status(404).send();
      return;
    }
    res.status(200).send(user.times);
  });
});

// get times
router.get('/:id/:from/:to', (req, res) => {
  db.query(
    "SELECT t.id, DATE_FORMAT(date, '%d.%m.%Y') date, TIME_FORMAT(worked_from, '%k:%i') worked_from, TIME_FORMAT(worked_to, '%k:%i') worked_to, TIME_FORMAT(TIMEDIFF(break_to, break_from), '%k:%i') break_duration FROM users u JOIN times t ON u.id = t.user_id WHERE u.id = " +
      req.params.id +
      " AND date >= '" +
      req.params.from +
      "' AND date <= '" +
      req.params.to +
      "' ORDER BY date",
    (err, result) => {
      if (err || result.length == 0) {
        res.status(400).send();
        return;
      }

      res.status(200).send({ times: result });
    }
  );
});

// add time to id
router.post('/:id', (req, res) => {
  const timeScheme = {
    date: Joi.date().required(),
    from: Joi.string().required(),
    to: Joi.string().required(),
    break_from: Joi.string(),
    break_to: Joi.string(),
  };
  const { error } = Joi.validate(req.body, timeScheme);

  if (error) {
    res.status(400).send(error);
    return;
  }

  db.query(
    "INSERT INTO times (user_id, date, worked_from, worked_to, break_from, break_to) VALUES ('" +
      req.params.id +
      "', '" +
      req.body.date +
      "', '" +
      req.body.from +
      "', '" +
      req.body.to +
      "', '" +
      req.body.break_from +
      "', '" +
      req.body.break_to +
      "')",
    (err, result) => {
      if (err) {
        res.status(400).send();
      }
      res.status(201).send();
    }
  );
});

// delete time
router.delete('/:userId/:id', (req, res) => {
  console.log(
    'DELETE FROM times WHERE user_id = ' +
      req.params.userId +
      ' AND id = ' +
      req.params.id
  );
  db.query(
    'DELETE FROM times WHERE user_id = ' +
      req.params.userId +
      ' AND id = ' +
      req.params.id,
    (err, result) => {
      if (err) {
        res.status(400).send();
        return;
      }
      res.status(200).send();
    }
  );
});

module.exports = router;
