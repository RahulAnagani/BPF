    const upload=require("../Middlewares/Upload");
    module.exports.upLoadResume=(req,res)=>{
        upload.single('resume')(req, res, (err) => {
            if (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ message: err.message });
            } else {
                return res.status(400).json({ message: err.message });
            }
            }
        
            const file = req.file; 
            if (!file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }
            console.log(file)

            res.status(200).json({
            message: 'Resume uploaded successfully!',
            file: {
                filename: file.filename,
                filePath: file.path,
                fileSize: file.size,
                fileType: file.mimetype,
            }
            });
        });
};