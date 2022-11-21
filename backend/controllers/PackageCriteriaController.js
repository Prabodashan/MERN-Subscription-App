const packageCriteriaModel = require("../models/packageCriteria");

exports.getPackageCriteria = async (req, res) => {
  try {
    const packageCriteria = await packageCriteriaModel.find();
    return res.json(packageCriteria);
  } catch (error) {
    console.log(error);
  }
};

exports.getPackageCriteriaById = async (req, res) => {
  try {
    const packageCriteria = await packageCriteriaModel.findById(req.params.id);
    return res.json(packageCriteria);
  } catch (error) {
    console.log(error);
  }
};

exports.createPackageCriteria = async (req, res) => {
  const { criteriaName, criteriaDescription, createdAt, createdBy } = req.body;
  try {
    const packageCriteria = await packageCriteriaModel({
      criteriaName,
      criteriaDescription,
      createdAt,
      createdBy,
    }).save();
    return res.json(packageCriteria);
  } catch (error) {
    console.log(error);
  }
};

exports.updatePackagheCriteria = async (req, res) => {
  try {
    const packageCriteria = await packageCriteriaModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: false,
      }
    );
    return res.json({ packageCriteria });
  } catch (error) {
    console.log(error);
  }
};

exports.deletePackageCriteria = async (req, res) => {
  try {
    const packageCriteria = await packageCriteriaModel.findByIdAndDelete(
      req.params.id
    );
    if (packageCriteria) {
      return res.json({ message: "Package Criteria deleted successfully" });
    }
    return res.status(404).json({ message: "Package Criteria not found" });
  } catch (error) {
    console.log(error);
  }
};
