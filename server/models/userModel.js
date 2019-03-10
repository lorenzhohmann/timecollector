const mongoose = require('mongoose');
const Time = require('./timeModel.js');

const userSchema = mongoose.Schema({
	'name': String,
	'times': [Time]
});

module.exports = mongoose.model('User', userSchema);