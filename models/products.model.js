const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please Enter Name']
    },
    price: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                require
            }, url: {
                type: String,
            }
        }
    ],
    category: {
        type: String,
        require: [true, 'Please Enter Category']
    },
    brand: {
        type: String,
        require: [true, 'Please Enter Brand']
    },
    stocks: {
        type: Number,
        require: [true, 'Please Enter Stocks']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);