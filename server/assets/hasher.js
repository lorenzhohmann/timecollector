const crypto = require('crypto');

const salt = 'timecolle19';

module.exports = {

	hash: function(password) {
		var hash = crypto.createHmac('sha512', salt);
	    hash.update(password);
	    var value = hash.digest('hex');

	    return value;
	}

}