const mongoose=require("mongoose");

let productSchema=new mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    unit:String,
    quantity:Number,
    isOrganic:Boolean
})

let ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;