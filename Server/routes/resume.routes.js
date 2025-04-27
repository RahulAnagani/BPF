const express=require("express")
const router=express.Router();
const resumeController=require("../Controllers/resume.controller")
router.post("/uploadResume",resumeController.upLoadResume);
module.exports=router;