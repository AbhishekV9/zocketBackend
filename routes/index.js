

const express=require("express");
const router=express.Router();

const userController=require("../controller/userController");

router.post("/register",userController.RegisterUser);
router.get("/get_user/:id",userController.SendUser)

module.exports=router;