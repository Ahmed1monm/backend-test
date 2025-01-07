const express = require('express');

const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');

const apiRouter = express.Router();
apiRouter.use('/auth', authRoutes);
apiRouter.use('/products', productRoutes);

module.exports = apiRouter;
