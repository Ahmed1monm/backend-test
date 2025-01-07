const express = require('express');
const {login, register} = require('../controllers/authController');
const {loginValidator, registerValidator} = require('../validators/authValidators');

const router = express.Router();
router.post('/login', loginValidator, login);
router.post('/register', registerValidator, register);

module.exports = router;
