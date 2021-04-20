const mongoose = require('mongoose');
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
//{document:false, query: true}ppppppppppp

// FlowerSchema.pre('findOneAndRemove', async function(next) {
// 	console.log('oiiiiiiiiiiiiiiiiiiiiiii')
// });

	 // console.log(BuqueSchema)
	//   const flowerId = this._id
	//   console.log(flowerId)

//   FlowerSchema.pre('findOneAndRemove', async function(next) {
// 	 let id = this.getQuery()["_id"];
// 	  console.log(id)
// 	const flower = await BuqueSchema.findOne({flowers: id})
// 	console.log(flower)
// 	if (!flower) next();
// });




FlowerSchema.pre('remove', async function() {
	const buques = await this.model('Buque').countDocuments({flowers:{$elemMatch:{flower:this._id}}})

	console.log(buques)
	if(buques > 0) {
		throw new Error('Não é possível excluir essa flor.')
	}
});


// FlowerSchema.pre('findOneAndRemove', async function(next) {
// 	let id = this.getQuery()["_id"];
// 	 console.log(id)
//    //   const flowerId = this._id
//    //   console.log(flowerId)
//    const flower = await BuqueSchema.findOne({flowers: flowerId})
//    if (!flower) next();
// });


// FlowerSchema.post('remove', function(doc) {
// 	console.log('%s has been removed', doc._id);
//   });

	// const flowerId = this._id
		// console.log(flowerId)
		// const flower = await BuqueSchema.findOne({flowers: flowerId})
		// if (!flower) next();

const Flower = mongoose.model('Flower', FlowerSchema);


module.exports = Flower;


