const mongoose = require('mongoose');

// Import user and product models
const User = require('../User/usermodel')
const Product = require('../Product/productmodel');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product', // Reference to the Product model
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;
