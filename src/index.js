const express =require("express");
const connectivity=require("./Helpers/databaseConnectivity");
const bodyparser=require("body-parser");
const userRoutes=require("./Routes/userRoutes/userRouting");
const app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//routes
app.use("/",userRoutes);

app.listen(process.env.PORT || 6000,()=>{
    console.log("SERVER STARTED ON PORT 6000");
})
