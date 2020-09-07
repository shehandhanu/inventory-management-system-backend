const express = require('express');

const router = express.Router();

const { newProducts,
    getProducts,
    getSingleProduct,
    updateProduct } = require('../controllers/product.Controller');
//Add Product
router.route('/product').post(newProducts);
//Get All Products
router.route('/product').get(getProducts);
//Get One Product
router.route('/product/:id').get(getSingleProduct);
//Update Products
router.route('/product/:id').put(updateProduct);


module.exports = router;