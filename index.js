const express=require("express");
const port=process.env.PORT || "8000";
const cors=require("cors");
const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/',require("./routes"));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:${err}`)
    }

    console.log(`Server is runnig on Port: ${port}`);
});