const multer=require("multer");
const storage=multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null, 'uploads/resumes/');
    },
    filename:(req,file,callback)=>{
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024} 
  });
  
  module.exports=upload;