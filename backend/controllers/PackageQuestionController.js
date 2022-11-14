const PackageQuestions = require("../models/packageQuestion");

exports.createPackageQuesitions = async (req, res) => {
  try {
    const { package, createdAt, createdBy } = req.body;

    const packageQuestion = await new PackageQuestions({
      package,
      createdAt,
      createdBy,
    }).save();

    return res.json({
      packageQuestion,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPackageQuesitionsBypackageId = async (req, res) => {
  const packageQuestion = await PackageQuestions.findOne({
     packageId: req.params.id
});
  try {
    return res.json({
      packageQuestion,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updatePackageQuestion = async (req, res) => {
  try {
    const packageQuestion = await PackageQuestions.findOneAndUpdate(
      { packageId: req.params.id },
      {
        $set: req.body,
      }
    );
    return res.status(200).json({
      packageQuestion,
    });
  } catch (err) {
    console.log(err);
  }
};
