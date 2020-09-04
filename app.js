const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

//Set Cors
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

//Import Routes
const products = require('./routes/productRoutes');

//use Routes
app.use('/api/v1', products)


module.exports = app;