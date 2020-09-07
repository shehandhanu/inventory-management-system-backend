const express = require('express');

const router = express.Router();

const { newProducts,
    getProducts,
    getSingleProduct } = require('../controllers/product.Controller');

router.route('/product').post(newProducts);
router.route('/product').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

module.exports = router;