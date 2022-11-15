const multer = require("multer");
let fs = require("fs-extra");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let path =
      "/tmp/multer/myfolder/" + req.query.orderId + "/" + req.query.imageDesc;
    // let path = '/tmp/multer/myfolder/'+req.body.orderId;
    fs.mkdirsSync(path);
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, req.query.imageDesc + "_" + file.originalname);
  },
});

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024*1024
  }
}).array("files", 4);
exports.single = multer({
  storage: storage,
  limits: {
    fileSize: 1024*1024
  }
}).single("file");
