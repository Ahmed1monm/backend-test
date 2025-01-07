const {body} = require('express-validator');

const validationMiddleware = require('../middlewares/validationMiddleware');

const createProductValidator = [
    body('name').notEmpty().isString().withMessage('Name is required and must be a string'),
    body('category').optional().isString().withMessage('Category must be a string'),
    body('price').isFloat({min: 0}).withMessage('Price must be a positive number'),
    body('quantity').isInt({min: 0}).withMessage('Quantity must be a non-negative integer'),

    validationMiddleware
];

const updateProductValidator = [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('category').optional().isString().withMessage('Category must be a string'),
    body('price').optional().isFloat({min: 0}).withMessage('Price must be a positive number'),
    body('quantity').optional().isInt({min: 0}).withMessage('Quantity must be a non-negative integer'),

    validationMiddleware
];

module.exports = {
    createProductValidator,
    updateProductValidator
};
