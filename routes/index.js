

const express=require("express");
const router=express.Router();

const userController=require("../controller/userController");

router.post("/register",userController.RegisterUser);
router.get('/success/:id',function(req,res){
    console.log(req.params.id);
    return res.status(200).json({
        message:"successsasasasasasa"
    })
})

module.exports=router;