const { upload, single } = require("../helpers/multerHelpers");
const multer = require("multer");
// single file limitations
exports.singleFileMiddleware = function (req, res, next) {
  single(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err });
    } else if (err) {
      return res.status(400).json({ error: err });
    }
    next();
  });
};

// multiple files limitations
exports.arrayFileMiddleware = function (req, res, next) {
    console.log(req.files)
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err });
      } else if (err) {
        return res.status(400).json({ error: err });
      }
      next();
    });
  };
