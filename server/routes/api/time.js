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
router.get('/:id/:fromYear/:fromMonth/:fromDay/:toYear/:toMonth/:toDay', (req, res) => {
	User.findOne({_id: req.params.id}, (err, user) => {
		if(err) {
			res.status(404).send();
			return;
		}

		let times = user.times;
		let timesBetween = [];

		const fromYear = req.params.fromYear;
		const fromMonth = req.params.fromMonth;
		const fromDay = req.params.fromDay;

		const toYear = req.params.toYear;
		const toMonth = req.params.toMonth;
		const toDay = req.params.toDay;

		times.forEach((time, index) => {

			const timestapCurrentObj = moment(time.date).unix();

			const timestampFrom = moment(`${fromYear}-${fromMonth}-${fromDay}`).unix();
			const timestampTo = moment(`${toYear}-${toMonth}-${toDay}`).unix();

			if(timestapCurrentObj >= timestampFrom && timestapCurrentObj <= timestampTo) {
				timesBetween.push(times[index]);
			}

		});

		res.status(200).send(timesBetween);
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
			date: moment(req.body.date)/*.add(1, 'hour')*/.tz('Europe/Berlin').format('YYYY-MM-DD'),
			from: moment(req.body.from)/*.add(1, 'hour')*/.tz('Europe/Berlin').format('YYYY-MM-DD H:mm'),
			to: moment(req.body.to)/*.add(1, 'hour')*/.tz('Europe/Berlin').format('YYYY-MM-DD H:mm')
		};

		if(req.body.break_from && req.body.break_to) {	// TODO check if set and not same time
			time.break_from = moment(req.body.break_from)/*.add(1, 'hour')*/.tz('Europe/Berlin').format('YYYY-MM-DD H:mm');
			time.break_to = moment(req.body.break_to)/*.add(1, 'hour')*/.tz('Europe/Berlin').format('YYYY-MM-DD H:mm');
		}

		user.times.push(time);
		user.save((err) => {
			if(err) res.status(500).send(err);
			res.status(201).send(user);
		});
	});
});

// delete time
router.delete('/:userId/:id', (req, res) => {
	User.findOne({_id: req.params.userId}, (err, user) => {
		if(err) {
			res.status(404).send();
			return;
		}

		let changedTimes = [];

		for(let i = 0; i < user.times.length; i++) {
			let time = user.times[i];
			if(time._id != req.params.id) {
				changedTimes.push(time);
			}
		}

		user.times = changedTimes;

		user.save((err) => {
			if(err) {
				res.status(400).send();
				return;
			}
			res.status(200).send();
		});

	});
});

module.exports = router;