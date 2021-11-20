const mongoose=require("mongoose");

const db=mongoose.connection();

db.on('error',console.error.bind('Error connecting to MongoDB'));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports=db;