const express = require('express');
const router = express.Router();
const Joi = require('joi');
const hasher = require('../../assets/hasher');
const jwt = require('jsonwebtoken');
const db = require('../../assets/mysqlconnection');

function jwtSignUser(user) {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, process.env.JWT_SECRET || 'scrtTKN19', {
		expiresIn: ONE_WEEK
	});
}

// login
router.post('/login', (req, res) => {
	db.query(
		"SELECT * FROM users WHERE name = '" +
			req.body.name +
			"' AND password = '" +
			hasher.hash(req.body.password) +
			"'",
		(err, result) => {
			if (err) {
				res.status(400).send();
				return;
			}

			if (result.length == 0) {
				res.status(403).send({error: 'Bitte überprüfe deine Login-Daten.'});
				return;
			}

			res.status(200).send({
				user: result[0],
				token: jwtSignUser({id: result.id, name: result.name})
			});
		}
	);
});

module.exports = router;
