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

//Deletar

router.delete('/:buqueId', async (req, res) => {
	try {
		await Buq.findByIdAndRemove(req.params.buqueId);
		return res.send('sucess in remove buque');
	} catch (err) {
		return res.status(400).send({ error: 'Error deleting buque' });
	}

	//pre.delete
});

//Atualizar

router.put('/:buqueId', async (req, res) => {
	try {
		const { title, flowers } = req.body;

		const buque = await Buq.findByIdAndUpdate(req.params.buqueId, {
			title,
			flowers
		}, { new: true });
		return res.send({ buque});
	} catch (err) {
		return res.status(400).send({ error: 'Error updating buque' });
	}
});


module.exports = app => app.use('/buq', router);
