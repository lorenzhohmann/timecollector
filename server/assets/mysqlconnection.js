const mysql = require('mysql');


const connection = mysql.createConnection({
	host: 'localhost',
	user: 'timecollector',
	database: 'timecollector',
	password: 'B3bwuf^7VeU6uakb'
});

connection.connect();

module.exports = connection;