import express from "express";
import dotenv from "dotenv";
import databaseconnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import echoRoute from "./routes/echoRoute.js";

const app=express();

dotenv.config({
    path:".env"
})
databaseconnection();

//middlewares

app.use(express.urlencoded({
    extends:true
}))
app.use(express.json());
app.use(cookieParser());


//apis

app.use("/api/v1/user",userRoute);
app.use("/api/v1/echo",echoRoute);

app.get("/home",(req,res)=>{
res.status(200).json({
    message:"coming from backend...."

})
})





app.listen(process.env.PORT,()=>{
console.log(`App is running on ${process.env.PORT} port`)
})