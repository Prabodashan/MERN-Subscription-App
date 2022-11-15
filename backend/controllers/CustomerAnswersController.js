const CustomerAnswersModel = require("../models/customerAnswers");
const Order = require("../models/order");
const { createOrder } = require("../controllers/OrderController");

exports.getCustomerAnswersByPackageId = async (req, res) => {
  const customerAnswers = await CustomerAnswersModel.findOne({
    packageId: req.params.id,
  });
  try {
    return res.json({
      customerAnswers,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCustomerAnswers = async (req, res) => {
  const customerAnswers = await CustomerAnswersModel.find();
  try {
    return res.json({
      customerAnswers,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createCustomerAnswers = async (req, res) => {
  try {
    const { customerId, userAnswers, createdAt, createdBy } = req.body;

    const customerAnswers = await new CustomerAnswersModel({
      customerId,
      answers: userAnswers,
      createdAt,
      createdBy,
    }).save();

    return res.json({
      order,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateCustomerAnswers = async (req, res) => {
  try {
    const { id, answers } = req.body;
    answers.forEach(async (element) => {
      const answerExists = await CustomerAnswersModel.findOne({
        _id: id,
        "answers.questionId": element.questionId,
      });
      if (!answerExists) {
        const customerAnswers = await CustomerAnswersModel.updateOne(
          { _id: id },
          { $push: { answers: element } }
        );
        console.log(customerAnswers);
      } else {
        const customerAnswers = await CustomerAnswersModel.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              "answers.$[elem].answer": element.answer,
            },
          },
          { arrayFilters: [{ "elem.questionId": { $eq: element.questionId } }] }
        );
        console.log(customerAnswers);
      }
    });
    return res.status(200).json({"message":"Answers Updated"});
  } catch (error) {
    console.log(error);
  }
};
