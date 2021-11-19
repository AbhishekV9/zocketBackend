const express=require("express");
const app=express();
const port=process.env.PORT || "8000";
const cors=require("cors");

app.use('/',require("./routes"));
app.use(cors);

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:${err}`)
    }

    console.log(`Server is runnig on Port: ${port}`);
});