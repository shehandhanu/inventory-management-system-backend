const Product = require('../models/products.model');
const ErrorHandler = require('../utils/errorHandler');

//Create New Product  => /api/v1/product
exports.newProducts = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

}
//Get All Products  => /api/v1/product
exports.getProducts = async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

//Get Single Product => /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('Product Not Found', 404))
    }

    res.status(200).json({
        success: true,
        product
    })
}

//Update Product => /api/v1/product/:id 
exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler('Product Not Found', 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
}