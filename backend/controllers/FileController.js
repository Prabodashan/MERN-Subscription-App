const fs = require("fs-extra");
const admzip = require("adm-zip");

const path = "/tmp/multer/myfolder";

//multiple files upload
exports.uploadFiles = (req, res) => {
  try {
    res.send(req.files);
  } catch (error) {
    console.log(error);
    res.send(400);
  }
};

exports.uploadFile = (req, res) => {
  try {
    // console.log(req.file.size)
    res.send(req.file);
  } catch (error) {
    console.log(error);
    res.send(400);
  }
};

exports.downloadAll = async (req, res) => {
  if(!fs.existsSync(path+ "/" + req.query.orderId)){
    return res.status(404).json({error:"File Path does not exist"});
  }
  const outputFile =
    path + "/" + req.query.orderId + "/" + req.query.orderId + ".zip";
  try {
    const zip = new admzip();
    zip.addLocalFolder(path + "/" + req.query.orderId);
    await zip.writeZip(outputFile);
    console.log(`Created ${outputFile} successfully`);
  } catch (e) {
    console.log(`Something went wrong. ${e}`);
  }
  res.download(outputFile);
  fs.remove(outputFile);
};

exports.downloadOne = async (req, res) => {
  if(!fs.existsSync(path+ "/" + req.query.orderId)){
    return res.status(404).json({error:"File does not exist"});
  }
  res.download(req.query.filePath);
};

// exports.getAll = async (req, res) => {
//     fs.readdir(path+'/'+req.query.orderId, function (err, files) {
//       //handling error
//       // let fileArray = [];
//       if (err) {
//         return console.log("Unable to scan directory: " + err);
//       }
//       //listing all files using forEach
//       files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file);
//       });
//       res.send(files);
//     });
//   }
