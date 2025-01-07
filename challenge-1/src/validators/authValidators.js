const {body} = require('express-validator');

const validationMiddleware = require('../middlewares/validationMiddleware');

const loginValidator = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),

    validationMiddleware
];

const registerValidator = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('role').notEmpty().withMessage('Role is required'),
    body('role').isIn(['user', 'admin']).withMessage('Role must be either user or admin'),

    validationMiddleware
];

module.exports = {
    loginValidator,
    registerValidator
};
