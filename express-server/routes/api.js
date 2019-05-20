// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
//const dbHost = 'mongodb://database/mean-docker';
const dbHost = 'mongodb://database/train-docker';

// Connect to mongodb
mongoose.connect(dbHost);

// New Train Table....
// create mongoose schema
const trainSchema = new mongoose.Schema({
  trainname: String,
  trainno: Number,
  trainorigin: String,
  traindest: String
});

// create mongoose model
const Train = mongoose.model('Train', trainSchema);

/* GET api listing. */
router.get('/', (req, res) => {
		res.send('Rail API is Running!!!');
});

/* GET all trains. */
router.get('/trains', (req, res) => {
	Train.find({}, (err, trains) => {
		if (err) res.status(500).send(error)

		res.status(200).json(trains);
	});
});

/* GET one Trains. */
router.get('/trains/:id', (req, res) => {
	Traiin.findById(req.params.id, (err, trains) => {
		if (err) res.status(500).send(error)

		res.status(200).json(trains);
	});
});

/* Create a train. */
router.post('/trains', (req, res) => {
	let train = new Train({
		trainname: req.body.trainname,
		trainno: req.body.trainno,
		trainorigin: req.body.trainorigin,
		traindest: req.body.traindest
	});

	train.save(error => {
		if (error) res.status(500).send(error);

		res.status(201).json({
			message: 'Train created successfully'
		});
	});
});
module.exports = router;
