const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

// setup cors
app.use(express.json());
app.use(cors());

// connect mongoose
mongoose.connect('mongodb://root:Hdsfhiu2345@ds163835.mlab.com:63835/timecollector', {useNewUrlParser: true});

// add time router RestAPI
const timeRouter = require('./routes/api/time.js');
app.use('/api/time', timeRouter);

// add user router RestAPI
const userRouter = require('./routes/api/user.js');
app.use('/api/user', userRouter);

// fallback for RestAPI
app.use((req, res) => res.status(404).send());

// handle production
if(process.env.NODE_ENV === 'production') {
	// static folder
	app.use(express.static(__dirname + '/public'));

	// handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));