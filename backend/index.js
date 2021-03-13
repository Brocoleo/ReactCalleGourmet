const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');

//use methods libs
const app = express();
require('dotenv').config();

//Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cors())

//Database setup
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {console.log("Base de datos conectada")})

//Routes Setup
app.use('/api/cliente', require('./routes/cliente'));
app.use('/api/comida', require('./routes/comida'));