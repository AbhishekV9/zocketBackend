const User=require("../models/user");

const sendEmail =require("../utils/send-email");

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)){
        return true
    }else{
        return false;
    } 
}

function NotifyUser(message,user){
    var mailOptions={
        from:'highkiller999@gmail.com',
        to:user.email,
        subject:'Sending an Email using Node.js',
        text:message
    }
    sendEmail(mailOptions);
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
            NotifyUser("User Already Registered",user);
            return res.status(200).json({
                notValid:false,
                registered:false,
                isPresent:true,
                message:"User Already Registered",
                path:`https://zocket99.herokuapp.com/get_user/${user.id}`
            })
        }
        user=await User.create(req.body);
        NotifyUser("User Registered Successfully",user);
        return res.status(200).json({
            notValid:false,
            registered:true,
            isPresent:false,
            message:"User Registered Successfully",
            path:`http://localhost:8000/get_user/${user.id}`
        });
   }catch(error){
      console.log(error);
      return res.json(500,{
          message:'Internal Server Error'
    });
   }
}

module.exports.SendUser=async function(req,res){
    try{
        const id=req.params.id;
        const user=await User.findById(id);
        return res.status(200).json({
            user
        });        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
}

