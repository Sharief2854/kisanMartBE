let express = require("express");
const CartModel = require("../models/CartModel");
const { customerAuth } = require("../middlewares/auth");
let router=express.Router();

router.post("/add",customerAuth,async (req,res)=>{
    let data=req.body;
    data.userId=req.userId;
    let cartData=await CartModel.find(data);
    console.log(cartData);
    if(cartData.length>0){
        res.send("already added");
        return;
    }
    data.count=1;
    
    let result = await CartModel.create(data);
    res.json(result);
});
router.get("/",customerAuth,async (req,res)=>{
    let result = await CartModel.find({userId:req.userId}).populate("productId");
    res.json(result);
})
router.post("/count",async (req,res)=>{

    let data=req.body;
    let result=await CartModel.findOne({_id:data.id});
    let count=result.count;

    if(data.operation=="dec"){
        count--;
    }
    else{
        count++;
    }
    await CartModel.findOneAndUpdate({_id:data.id},{count:count});
    res.send("done");

});

router.delete("/delete/:id",async (req,res)=>{
    let id=req.params.id;
    await CartModel.deleteOne({_id:id});
    res.send("deleted");
});
module.exports = router;
