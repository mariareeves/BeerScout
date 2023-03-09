const mongoos = require('mongoose')
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    yelpId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    reviewCount: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Brewery', brewerySchema);