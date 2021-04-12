const express = require ('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const morgan = require ('morgan')
const multer = require ('multer')

const app = express();
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const upload = multer({dest: "uploads/"})

app.use(morgan('dev'))

require('./controllers/BuqCont')(app);
require('./controllers/flowersCont')(app);

app.listen(3010);
