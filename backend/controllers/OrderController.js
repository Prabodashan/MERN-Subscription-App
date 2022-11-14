const customerAnswers = require("../models/customerAnswers");
const Order = require("../models/order");
const { createCustomerAnswers } = require("./CustomerAnswersController");
exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    return res.status(200).json({ orders });
  } catch (error) {
    console.log(error);
  }
};

exports.createOrder = async (req, res) => {
  try {
    const {
      orderId,
      customerId,
      packageId,
      packageType,
      domainName,
      domainPrice,
      customerAnswers,
      createdAt,
      createdBy,
    } = req.body;

    const exists = await orderAlreadyExists(customerId, packageId);

    if (exists) {
      return res.status(409).json({ message: "Order Already exist" });
    }
    const data = {
      body: {
        customerId: customerId,
        answers: customerAnswers,
        createdAt: createdAt,
        createdBy: createdBy,
      },
    };
    const result = await createCustomerAnswers(data);
    console.log(result, "here");
    if(result){
        const order = await new Order({
            orderId,
            customerId,
            packageId,
            packageType,
            domainName,
            domainPrice,
            customerAnswers: result._id,
            createdAt,
            createdBy,
          }).save();
      
          return res.json({ order });
    }
    console.log("chaagi not found")

  } catch (error) {
    console.log(error);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    return res.status(200).json({
      order,
    });
  } catch (error) {
    console.log(error);
  }
};

orderAlreadyExists = async (reqCustomerId, reqPackageId) => {
  const value = await Order.findOne({
    customerId: reqCustomerId,
    packageId: reqPackageId,
  });
  if (value) {
    return true;
  } else {
    return false;
  }
  // const value = await Question.findOne({ questionId: req });
  // if (value) {
  //   return true;
  // } else {
  //   return false;
  // }
};
