const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
       userId:{
        type: String,
        required: true,
    },
    productId:{
        type: String,
        required: true,
    },
    productCode:{
        type: String,
        required: true,
    },
    razorpayId:{
        type: String,
        required: true,
    },
    userNumber:{
        type: String,
        required: true,
    },
    userAddress:{
        type: String,
        required: true,
    },
    productAmount:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    }
)

module.exports = mongoose.model("Order", orderSchema);