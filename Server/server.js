const http=require("http");
const app=require("./app");
const server=http.createServer(app);
const fs = require('fs');
const path = require('path');
const resumeDir = path.join(__dirname, 'uploads', 'resumes');
if (!fs.existsSync(resumeDir)) {
  fs.mkdirSync(resumeDir, { recursive: true });
}

server.listen(process.env.PORT||9090,()=>{
    console.log("Server is running on port",process.env.PORT?process.env.PORT:9090);
});