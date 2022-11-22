const CustomerAnswersModel = require("../models/customerAnswers");
const OrderModel = require("../models/order");
exports.getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
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

      const order = await new OrderModel({
        orderId,
        customerId,
        packageId,
        packageType,
        domainName,
        domainPrice,
        customerAnswers: userAnswers._id.toString(),
        createdAt,
        createdBy,
        status: false,
      }).save();

      return res.json({ order });
    } else {
      const order = await new OrderModel({
        orderId,
        customerId,
        packageId,
        packageType,
        domainName,
        domainPrice,
        customerAnswers,
        createdAt,
        createdBy,
        status: true,
      }).save();

      return res.json({ order });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { status, createdBy, createdAt } = req.body;
  try {
    const order = await OrderModel.find({
      orderId: req.params.id,
      packageId: req.body.packageId,
    });
    if (order.length > 0) {
      const updatedOrder = await OrderModel.updateOne(
        { _id: order[0]._id },
        { status: status, createdAt: createdAt, createdBy: createdBy }
      );
      return res.status(200).json({ updatedOrder });
    } else {
      return res.status(404).json({ error: "Order Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id);

    return res.status(200).json({
      order,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getOrderByCustomerIdAndPackageId = async (req, res) => {
  console.log(req.params.customerId, req.params.packageId);
  try {
    const order = await OrderModel.find({
      customerId: req.params.customerId,
      packageId: req.params.packageId,
    });
    if (order.length > 0) {
      return res.status(200).json(order);
    } else {
      return res.status(404).json({
        message: "No Order Exists for the Customer for the specified package",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

orderAlreadyExists = async (reqCustomerId, reqPackageId) => {
  const value = await OrderModel.findOne({
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

exports.deleteOrder = async (req, res) => {
  const order = await OrderModel.deleteOne({ orderId: req.params.id });
  try {
    return res.json({
      order,
    });
  } catch (err) {
    console.log(err);
  }
};
