const PackageQuestionsModel = require("../models/packageQuestion");

exports.createPackageQuesitions = async (req, res) => {
  try {
    const { package, createdAt, createdBy } = req.body;

    const packageQuestion = await new PackageQuestionsModel({
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
  const packageQuestion = await PackageQuestionsModel.findOne({
    packageId: req.params.id,
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
    const { package } = req.body;
    package.questions.forEach(async (element) => {
      const questionExists = await PackageQuestionsModel.find({
        "package.packageId": package.packageId,
        "package.questions.questionId": element.questionId,
      });
      if (questionExists.length==0) {
        const packageQuestions = await PackageQuestionsModel.updateOne(
          { packageId: package.packageId },
          { $push: { "package.questions": element } }
        );
        console.log(packageQuestions, "if")
      } else {
        const packageQuestions = await PackageQuestionsModel.findOneAndUpdate(
          { packageId: package.packageId },
          {
            $set: {
              "package.questions.$[elem]": element,
            },
          },
          { arrayFilters: [{ "elem.questionId": { $eq: element.questionId } }] }
        );
        console.log(packageQuestions, "else");
      }
    });
    return res.status(200).json({ message: "Answers Updated" });
  } catch (err) {
    console.log(err);
  }
};
