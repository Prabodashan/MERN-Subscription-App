const CustomerAnswersModel = require("../models/customerAnswers");
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
      answers,
      createdAt,
      createdBy,
    } = req.body;
    if (!domainName) {
      const exists = await orderAlreadyExists(customerId, packageId);

      if (exists) {
        return res.status(409).json({ message: "Order Already exist" });
      }

      const userAnswers = await new CustomerAnswersModel({
        customerId,
        answers,
        createdAt,
        createdBy,
      }).save();

      console.log(userAnswers._id, "here");
      const order = await new Order({
        orderId,
        customerId,
        packageId,
        packageType,
        domainName,
        domainPrice,
        customerAnswers: userAnswers._id.toString(),
        createdAt,
        createdBy,
      }).save();

      return res.json({ order });
    } else {
      const order = await new Order({
        orderId,
        customerId,
        packageId,
        packageType,
        domainName,
        domainPrice,
        customerAnswers,
        createdAt,
        createdBy,
      }).save();

      return res.json({ order });
    }
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
