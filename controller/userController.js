const User=require("../models/user");

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)){
        return true
    }else{
        return false;
    } 
}

module.exports.RegisterUser= async function(req,res){
   try{
    let email=req.body.email;
    let isValid=ValidateEmail(email);
    if(!isValid){
        return res.status(200).json({
            message:"Email Entered Is Not Valid"
        })
    }
    let user= await User.findOne({email:email});
    if(user){
        return res.status(200).json({
            message:"User Already Registered",
            user
        })
    }

    user=await User.create(req.body);
    return res.status(200).json({
        message:"User Registered Successfully",
        user
    });
    
   }catch(error){
      console.log(error);
      return res.json(500,{
          message:'Internal Server Error'
    });
   }
}


