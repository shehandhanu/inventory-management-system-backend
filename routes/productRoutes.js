const express = require('express');

const router = express.Router();

const { newProducts, } = require('../controllers/product.Controller');

router.route('/product').post(newProducts);

module.exports = router;