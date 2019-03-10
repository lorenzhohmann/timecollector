const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');
const moment = require('moment-timezone');

const User = require('../../models/userModel.js');
const Time = require('../../models/timeModel.js');

// get times from id
router.get('/:id', (req, res) => {
	User.findOne({_id: req.params.id}, (err, user) => {
		if(err) {
			res.status(404).send();
			return;
		}
		res.status(200).send(user.times);
	});
});

// get times
router.get('/:id/:year?/:month?/:day?', (req, res) => {
	User.findOne({_id: req.params.id}, (err, user) => {
		if(err) {
			res.status(404).send();
			return;
		}

		const year = req.params.year;
		let times = user.times;

		// if(year) {
		// 	times.forEach((time, index) => {
		// 		const requestedYear = moment(new Date(year)).format('YYYY');
		// 		const dateYear = moment(new Date(time.date)).format('YYYY');

		// 		if(requestedYear != dateYear) {
		// 			console.log(`removing ${index}`);
		// 			times.splice(index, 1);
		// 		}
		// 	});
		// }

		res.status(200).send(times);
	});
});

// add time to id
router.post('/:id', (req, res) => {
	User.findOne({_id: req.params.id}, (err, user) => {
		if(err) {
			res.status(404).send();
			return;
		}

		const timeScheme = {
			'date': Joi.date().required(),
			'from': Joi.date().required(),
			'to': Joi.date().required(),
			'break_from': Joi.date(),
			'break_to': Joi.date(),
		}
		const {error} = Joi.validate(req.body, timeScheme);

		if(error) {
			res.status(400).send(error);
			return;
		}

		let time = {
			date: moment(req.body.date).add(1, 'hour').tz('Europe/Berlin').format('YYYY-MM-DD'),
			from: moment(req.body.from).add(1, 'hour').tz('Europe/Berlin').format('YYYY-MM-DD H:mm'),
			to: moment(req.body.to).add(1, 'hour').tz('Europe/Berlin').format('YYYY-MM-DD H:mm')
		};

		if(req.body.break_from && req.body.break_to) {
			time.break_from = moment(req.body.break_from).add(1, 'hour').tz('Europe/Berlin').format('YYYY-MM-DD H:mm');
			time.break_to = moment(req.body.break_to).add(1, 'hour').tz('Europe/Berlin').format('YYYY-MM-DD H:mm');
		}

		user.times.push(time);
		user.save((err) => {
			if(err) res.status(500).send(err);
			res.status(201).send(user);
		});
	});
});

module.exports = router;