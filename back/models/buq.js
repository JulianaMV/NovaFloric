const mongoose = require('../database');
const FlowersSchema = require('./flowers')



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

BuqSchema.pre('remove', async function(next) {

	const flowerId = this._id
	console.log(flowerId)
	const flower = await FlowersSchema.aggregate([
		{
			$match: {
				_id: mongoose.Types.ObjectId(flowerId)
			}
		},
		{
			$project: {
				numberFlowers:{$size:'$flowers'}
			}
		}
	])
	if (flower.numberFlowers === 0) next();
});

const Buq = mongoose.model('Buque', BuqSchema);



module.exports = Buq;