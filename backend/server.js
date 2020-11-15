import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';

dotenv.config();

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

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server is running in ${NODE_ENV} mode on the ${PORT}`));