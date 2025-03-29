const mongoose = require('mongoose');

// Define WishList Schema
const WishListschema = mongoose.Schema(
    {
        productTitle: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        productId: {
            type: String,
            required: true,
        },
        userID: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

// Create and export the Category model
exports.Wishlist = mongoose.model('Wishlist', WishListschema);