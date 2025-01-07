const express = require('express');
const {authenticate, authorize} = require('../middlewares/authMiddleware');
const {
    addProduct,
    getProducts,
    deleteProduct,
    getProduct,
    updateProduct
} = require('../controllers/productController');
const {
    createProductValidator, updateProductValidator
} = require('../validators/productValidators');

const router = express.Router();

router.route('/')
    .get(getProducts)
    .post(authenticate, authorize('admin'), createProductValidator, addProduct);

router.route('/:id')
    .get(getProduct)
    .put(authenticate, authorize('admin'), updateProductValidator, updateProduct)
    .delete(authenticate, authorize('admin'), deleteProduct);


module.exports = router;
