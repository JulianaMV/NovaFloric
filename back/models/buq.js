const mongoose = require('../database');


const BuqSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true,
	},
	flowers: [{
		flower: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Flower'
		},
		qtd: Number,
	}],
});

const Buq = mongoose.model('Buque', BuqSchema);

module.exports = Buq;