const packageVarientModel = require("../models/packageVarients");

exports.getPackageVarients = async (req, res) => {
  try {
    const packageVarients = await packageVarientModel.find();
    return res.status(200).json(packageVarients);
  } catch (error) {
    console.log(error);
  }
};

exports.createPackageVarient = async (req, res) => {
  const {
    packageType,
    initialPrice,
    discountedPrice,
    isDiscounted,
    createdBy,
    createdAt,
  } = req.body;
  try {
    const packageVarients = await packageVarientModel({
      packageType,
      initialPrice,
      discountedPrice,
      isDiscounted,
      createdBy,
      createdAt,
    }).save();
    return res.status(201).json(packageVarients);
  } catch (error) {
    console.log(error);
  }
};

exports.getPackageVarientsById = async (req, res) => {
  try {
    const packageVarients = await packageVarientModel.findById(req.params.id);
    return res.json(packageVarients);
  } catch (error) {
    console.log(error);
  }
};

exports.updatePackageVarients = async (req, res) => {
  try {
    const packageVarients = await packageVarientModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: false,
      }
    );
    if (packageVarients) {
      return res.status(200).json(packageVarients);
    } else {
      return res
        .status(404)
        .json({ message: "No package found for id " + req.params.id });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deletePackageVarientById = async (req, res) => {
    try {
        const packageCriteria = await packageVarientModel.findByIdAndDelete(
          req.params.id
        );
        if (packageCriteria) {
          return res.json({ message: "Package Varient deleted successfully" });
        }
        return res.status(404).json({ message: "Package Varient not found" });
      } catch (error) {
        console.log(error);
      }
}
