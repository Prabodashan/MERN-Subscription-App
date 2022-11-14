const express = require("express");
const router = express.Router();
const { upload, single } = require("../helpers/multerHelpers");

const {
  uploadFile,
  uploadFiles,
  downloadAll,
  downloadOne,
  getAll,
} = require("../controllers/FileController");
const {
  arrayFileValidation,
  singleFileValidation,
  singleFileMiddleware,
  arrayFileMiddleware,
} = require("../middlewares/fileValidation");
const multer = require("multer");

router.post(
  "/upload/all",
arrayFileMiddleware,
  uploadFiles
);

router.post("/upload", singleFileMiddleware, uploadFile);

router.get("/download/all", downloadAll);

router.get("/download", downloadOne);

// get files details from database
// router.get("/", getAll)

module.exports = router;
