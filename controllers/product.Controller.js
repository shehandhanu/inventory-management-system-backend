const Product = require('../models/products.model');

//Create New Product
exports.newProducts = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

}
