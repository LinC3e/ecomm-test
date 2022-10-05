const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    userID: { type: String, required: true },
    products : [
        {
            productID: { type : String },
            quantity: { type: Number , default: 1}
        }
    ],
    amount: { type : Number , required : true },
    address: { type : Object },
    status: { type : String , defautl: "pending" }
})

module.exports = mongoose.model('cart',productSchema)