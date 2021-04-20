const express = require('express');
const Buq = require('../models/buq');
const Flower = require('../models/flowers');


const router = express.Router();


//Criar

router.post('/', async (req, res) => {
	try {
		const { title, flowers } = req.body

		const buque = await Buq.create( { title, flowers });

		return res.send({ buque });
	} catch (err) {
		return res.status(400).send({ error: 'Error creating new buque' });
	}});

//Listar

router.get('/', async (req, res) => {
	try {
		const buques = await Buq.find().populate('flowers.flower');

		return res.send({ buques });
	} catch (err) {
		return res.status(400).send({ error: 'Error loading buques' });
	}
});
//pegar umaa

router.get('/:buqueId', async (req, res) => {
	try {
		const buques = await Buq.findById(req.params.buqueId);

		return res.send(buques);
	} catch (err) {
		return res.status(400).send({ error: 'Error loading buque' });
	}
});

//Deletar

router.delete('/:buqueId', async (req, res) => {
	try {
		await Buq.findByIdAndRemove(req.params.buqueId);
		return res.send('sucess in remove buque');
	} catch (err) {
		return res.status(400).send({ error: 'Error deleting buque' });
	}

});

//Atualizar

router.put('/:buqueId', async (req, res) => {
	try {
		const { title } = req.body;

		const buque = await Buq.findByIdAndUpdate(req.params.buqueId, {
			title,
		}, { new: true });
		return res.send({ buque});
	} catch (err) {
		return res.status(400).send({ error: 'Error updating buque' });
	}
});


//Atualizar Qtdd

router.put('/flower/:buqueId', async (req, res) => {
	try {
		const { _id, ...fields } = req.body;
		const { buqueId } = req.params;

		//{flowers:{$elemMatch:{flower:this._id}}}
		const updateFieds = {};
		const entries = Object.entries(fields)
		
		entries.forEach(([key, value]) => {
			updateFieds[`flowers.$.${key}`] = value;
		})

		const buque = await Buq.findOneAndUpdate({_id: buqueId, "flowers._id": _id}, { $set: updateFieds}, {new: true})

		return res.send({ buque });
	} catch (err) {
		console.warn(err)
		return res.status(400).send({ error: 'Error updating buque' });
	}
});

//zerar Qtddsp

router.put('/zerar/:buqueid', async (req, res) => {
	try {
		const { buqueid } = req.params;
		console.log(buqueid)
		const buquee = await Buq.findOne({"_id" : buqueid}).exec();
		console.log(buquee)

		const flowers = buquee.flowers.map(flor=>{
			flor.qtd= flor.qtd-flor.qtd;
			return flor;
		})

		const buque = await Buq.findByIdAndUpdate(buqueid, {
			flowers
		}, { new: true });
		return res.send({ buque});
	} catch (err) {
		console.warn(err)
		return res.status(400).send({ error: 'Error updating buque' });
	}
});

//Deletarr

router.delete('/:buqueId', async (req, res) => {
	try {
		await Buq.findByIdAndRemove(req.params.buqueId);
		return res.send('sucess in remove buque');
	} catch (err) {
		return res.status(400).send({ error: 'Error deleting buque' });
	}
});

module.exports = app => app.use('/buq', router);
