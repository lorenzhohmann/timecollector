const mysql = require('mysql');

const connection = mysql.createConnection({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'timecollector',
	database: process.env.DB_DATABASE || 'timecollector',
	password: process.env.DB_PASSWORD || 'B3bwuf^7VeU6uakb'
});

connection.connect();

module.exports = connection;
