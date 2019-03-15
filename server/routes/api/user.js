const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');
const hasher = require('../../assets/hasher.js');

const User = require('../../models/userModel.js');

// add user
router.post('/', (req, res) => {
	if(!req.body.name) {
		res.status(400).send();
		return;
	}

	const user = new User({name: req.body.name, password: hasher.hash(req.body.password), times: []});
	user.save((err) => {
		if(err) res.status(500).send();
		res.status(201).send(user);
	});
});

// get user name
router.get('/:id', (req, res) => {
	User.findOne({_id: req.params.id}, (err, user) => {
		if(err) {
			res.status(404).send();
			return;
		}

		res.status(200).send(user.name);
	});
});

// login
router.post('/login', (req, res) => {
	User.findOne({name: req.body.name, password: hasher.hash(req.body.password)}, (err, user) => {
		if(err) {
			res.status(404).send();
			return;
		}

		res.status(200).send(user);
	})
})

module.exports = router;