const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    yelpId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    rating: {
        type: Number,
    },
    reviewCount: {
        type: Number,
    },
    imageUrl: {
        type: String,
    },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

module.exports = mongoose.model('Brewery', brewerySchema);