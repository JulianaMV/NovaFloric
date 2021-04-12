const express = require('express');
const Flower = require('../models/flowers');
const multer = require ('multer')
const router = express.Router();

//define armazenamento das imagens

const storage = multer.diskStorage({
	//destino dos arquivos
	destination: function (request, file, callback) {
	  callback(null, './uploads');
	},
  
	//nomear
	filename: function (request, file, callback) {
	  callback(null, Date.now() + file.originalname);
	},
  });
  
  //parametros do multer
  const upload = multer({
	storage: storage,
	limits: {
	  fieldSize: 1024 * 1024 * 3,
	},
  });





//Criar

router.post('/cre', async (req, res) => {
	try {
		const flower = await Flower.create(req.body);
		console.log(req.body)
		console.log(flower)
		return res.send( flower );
	} catch (err) {
		return res.status(400).send({ error: 'Error creating new flower' });
	}});


	// router.post('/cre', upload.single('image'), async (req, res) => {
	
	// 	try {
	// 		const flower = await Flower.create({...req.body, filename: req.file.filename});
	// 		console.log(flower)
	// 		return res.send( flower );
	// 	} catch (err) {
	// 		console.warn(err)
	// 		return res.status(500).send({ error: 'Error creating new flower' });
	// 	}});
	

//Listar

router.get('/g', async (req, res) => {
	try {
		const flowers = await Flower.find();

		return res.send(flowers);
	} catch (err) {
		return res.status(400).send({ error: 'Error loading flowers' });
	}
});





module.exports = app => app.use('/flower', router);
