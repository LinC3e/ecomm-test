const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: { type: String, required: true },
    genre: { type: String, required : true },
    description: { type: String, required: true },
    img: { type: String , required: true },
    price: { type: Number, required: true }
})

module.exports = mongoose.model('product',productSchema)