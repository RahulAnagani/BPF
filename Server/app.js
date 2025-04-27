const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
const cors=require("cors")
const resume=require("./routes/resume.routes");
app.get("/",(req,res)=>res.status(200).send("They call him OG"));
app.use(cors());
app.use(express.json());
app.use("/resume",resume);
module.exports=app;