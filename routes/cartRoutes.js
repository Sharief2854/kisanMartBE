let express = require("express");
const CartModel = require("../models/CartModel");
let router=express.Router();

router.post("/add",async (req,res)=>{
    let data=req.body;
    data.count=1;
    let result = await CartModel.create(data);
    console.log(result)
    res.json(result);
});
router.get("/",async (req,res)=>{
    let result = await CartModel.find().populate("productId");
    res.json(result);
})
module.exports = router;
