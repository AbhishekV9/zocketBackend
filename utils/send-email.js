var nodemailer=require("nodemailer");

//using nodemailer to send notification Email
var transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'highkiller999@gmail.com',
        pass:'Abhishek@123'
    }
});

const sendEmail=(mailOptions)=>{
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
        }else{
            console.log("Email-Sent",info.response);
        }
    });
}

module.exports=sendEmail;