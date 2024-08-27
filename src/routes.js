const express = require('express');
const Product = require('./models/product');

const router = express.Router();

// GET /products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Retrieve details of a specific product
router.get('/:product_id', getProduct, (req, res) => {
    res.json(res.product);
});

// POST Add a new product
router.post('/', async (req, res) => {
    const { name, description, price, availabilityStatus } = req.body;

    if (!name || !description || price == null || availabilityStatus == null) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (price < 0) {
        return res.status(400).json({ message: 'Price must be a positive value' });
    }

    const product = new Product({
        name,
        description,
        price,
        availabilityStatus
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT Update details of a specific product
router.put('/:product_id', getProduct, async (req, res) => {
    const { name, description, price, availabilityStatus } = req.body;

    if (name != null) res.product.name = name;
    if (description != null) res.product.description = description;
    if (price != null) {
        if (price < 0) return res.status(400).json({ message: 'Price must be a positive value' });
        res.product.price = price;
    }
    if (availabilityStatus != null) res.product.availabilityStatus = availabilityStatus;

    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE Remove a specific product
router.delete('/:product_id', getProduct, async (req, res) => {
    try {
        await res.product.remove();
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// to find a product by ID
async function getProduct(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.product_id);
        if (product == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.product = product;
    next();
}

module.exports = router;
