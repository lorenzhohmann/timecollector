const mongoose = require('mongoose');

module.exports = mongoose.Schema({
	'date': Date,
	'from': Date,
	'to': Date,
	'break_from': Date,
	'break_to': Date
});