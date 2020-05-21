var express = require('express');
var router = express.Router();
const fs = require("fs")
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './nodefirst/uploads/convertTemp/')
  },
  filename: function (req, file, cb) {
    cb(null, "tempImg")
  }
})
var upload = multer({ storage: storage })//当前目录下建立文件夹uploads

router.post('/', upload.array('img',1), function(req, res, next) {//这里的 "img" 字段要和前端 ForData.append 中的字段一致
  console.log(req.body);
  res.json({result:"success"});
});

module.exports = router;
