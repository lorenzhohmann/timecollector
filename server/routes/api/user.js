const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');

const User = require('../../models/userModel.js');

// add user
router.post('/', (req, res) => {
	if(!req.body.name) {
		res.status(400).send();
		return;
	}

	const user = new User({name: req.body.name, times: []});
	user.save((err) => {
		if(err) res.status(500).send();
		res.status(201).send(user);
	});
});

module.exports = router;