const { validationResult } = require('express-validator');
const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getProducts = async (req, res) => {
    const { page = 1 } = req.query;
    try {
        const products = await Product.find()
            .skip((page - 1) * 10)
            .limit(10);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) return res.status(404).json({message: 'Product not found'});
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}
