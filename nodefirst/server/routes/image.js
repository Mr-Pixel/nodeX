var express = require('express');
var router = express.Router();
const fs = require("fs")
const multer = require("multer");
const child_process = require('child_process');
const path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'nodefirst/server/uploads/convertTemp/')
  },
  filename: function (req, file, cb) {
    cb(null, "tempImg")
  }
})
var upload = multer({ storage: storage })//当前目录下建立文件夹uploads

router.post('/upload', upload.array('img',1), function(req, res, next) {//这里的 "img" 字段要和前端 ForData.append 中的字段一致
  console.log('upload image success');
  res.json({result:"success"});

  // convertImageByPython(e=>{
  //   res.json({result:"success"});
  // });
});

router.get('/editImg/*',(req,res,next)=>{
  console.log(req.url);
  let aPath = path.resolve(__dirname, '..', 'uploads', 'convertTemp', req.url.split('/')[2]);
  res.sendfile(aPath);
});

function convertImageByPython(callback){
  var workerProcess = child_process.exec('python3 nodefirst/server/python/iconClip.py'+" "+"arg1", function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: '+error.code);
        console.log('Signal received: '+error.signal);
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    callback();
  });

  workerProcess.on('exit', function (code) {
      console.log('子进程已退出，退出码 '+code);
  });
}

module.exports = router;
