const multer=require("multer");
const path=require("path");
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/resumes/');
    },
    filename:(req,file,cb)=>{
        const fileExtension = path.extname(file.originalname);
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const fileFilter = (req, file, cb) => {
    const allowedTypes = /pdf|docx/;
    const isValid = allowedTypes.test(path.extname(file.originalname).toLowerCase()) && allowedTypes.test(file.mimetype);
    if (isValid) {
      cb(null, true); 
    } else {
      cb(new Error('Only PDF or DOCX files are allowed!'), false); 
    }
  };

  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } 
  });
  
  module.exports = upload;