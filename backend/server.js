import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB  from './config/db.js';

// Set environment
dotenv.config();

// Connect to Mongo Db
connectDB();

const app = express();

// Testing the working of the server
app.get('/', (req, res) => {
    res.send('API is running..')
});

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products)
});

// Get each product
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

const PORT = process.env.REACT_APP_PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on the ${PORT}`));