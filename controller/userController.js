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
            notValid:true,
            registered:false,
            isPresent:false,
            message:"Please Enter A Valid Email"
        })
    }
    let user= await User.findOne({email:email});
    if(user){
        return res.status(200).json({
            notValid:false,
            registered:false,
            isPresent:true,
            message:"User Already Registered",
            user
        })
    }

    user=await User.create(req.body);
    return res.status(200).json({
        notValid:false,
        registered:true,
        isPresent:false,
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


