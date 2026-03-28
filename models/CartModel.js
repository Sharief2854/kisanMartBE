const mongoose=require("mongoose");

let cartSchema=new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    count:Number
})

let CartModel = mongoose.model("Cart", cartSchema);
module.exports = CartModel;