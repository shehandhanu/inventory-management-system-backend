const express = require('express');

const router = express.Router();

const { newProducts,
    getProducts } = require('../controllers/product.Controller');

router.route('/product').post(newProducts);
router.route('/product').get(getProducts);

module.exports = router;