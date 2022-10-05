const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    userID: { type: String, required: true },
    products : [
        {
            productID: { type : String },
            quantity: { type: Number , default: 1}
        }
    ]
})

module.exports = mongoose.model('cart',productSchema)