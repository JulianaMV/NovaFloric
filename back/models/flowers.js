const mongoose = require('../database');
const BuqueSchema = require('./buq')


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
//{document:false, query: true}

FlowerSchema.post('remove', function(doc) {
	console.log('%s has been removed', doc._id);
  });

FlowerSchema.pre('remove', async function(next) {
	const flowerId = this._id
	console.log(flowerId)
	const flower = await BuqueSchema.findOne({flowers: flowerId})
	if (!flower) next();
});

const Flower = mongoose.model('Flower', FlowerSchema);

module.exports = Flower;


