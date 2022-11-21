const packageModel = require("../models/Package");

exports.getPackages = async (req, res) => {
  try {
    const package = await packageModel.find();
    return res.json(package);
  } catch (error) {
    console.log(error);
  }
};

exports.getPackageById = async (req, res) => {
  try {
    const package = await packageModel.findById(req.params.id);
    return res.json(package);
  } catch (error) {
    console.log(error);
  }
};

exports.createPackage = async (req, res) => {
  const {
    packageName,
    packageVariants,
    packageFeatures,
    createdAt,
    createdBy,
  } = req.body;
  try {
    const package = await packageModel({
      packageName,
      packageVariants,
      packageFeatures,
      createdAt,
      createdBy,
    }).save();
    return res.json(package);
  } catch (error) {
    console.log(error);
  }
};

exports.updatePackage = async (req, res) => {
  console.log(req.body);
  try {
    const packageExists = await packageModel.findOne({ _id: req.params.id });
    if (!packageExists) {
      return res.status(404).json({ message: "Package does not exist" });
    }
    const package = await packageModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: false,
      }
    );

    return res.json({ packageExists });
  } catch (error) {
    console.log(error);
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const package = await packageModel.findByIdAndDelete(req.params.id);
    if (packageCriteria) {
      return res.json({ message: "Package deleted successfully" });
    }
    return res.status(404).json({ message: "Package not found" });
  } catch (error) {
    console.log(error);
  }
};
