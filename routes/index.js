

const express=require("express");
const router=express.Router();

const userController=require("../controller/userController");

router.get("/register",userController.RegisterUser);
router.get('/success',function(req,res){
    return res.json(200,{
        message:"success"
    })
})

module.exports=router;