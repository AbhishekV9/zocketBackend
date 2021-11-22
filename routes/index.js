const express=require("express");
const router=express.Router();

const userController=require("../controller/userController");

router.get('/',function(req,res){
    return res.status(200).json({
        message:"Please visit correct path"
    })
})
router.post("/register",userController.RegisterUser);
router.get("/get_user/:id",userController.SendUser)

module.exports=router;