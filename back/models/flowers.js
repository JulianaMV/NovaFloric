const mongoose = require('../database');


const FlowerSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	// image: {
	// 	type: String,
	// 	default: 'placeholder.jpg',
	// },
});

const Flower = mongoose.model('Flower', FlowerSchema);

module.exports = Flower;

