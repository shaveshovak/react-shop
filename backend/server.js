const express = require('express');
const products = require('./data/products');

const app = express();

app.listen(5000, console.log('Server is running on the 5000'));

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