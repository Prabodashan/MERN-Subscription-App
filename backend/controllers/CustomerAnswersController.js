const CustomerAnswers = require("../models/customerAnswers");

exports.getCustomerAnswersByPackageId = async (req, res) => {
    const customerAnswers = await CustomerAnswers.findOne({
       packageId: req.params.id
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
    const customerAnswers = await CustomerAnswers.find();
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
      const { customerId, answers, createdAt, createdBy } = req.body;
  
      const customerAnswers = await new CustomerAnswers({
        customerId,
        answers,
        createdAt,
        createdBy,
      }).save();
  
      return res.json({
        customerAnswers,
      });
    } catch (err) {
      console.log(err);
    }
  };