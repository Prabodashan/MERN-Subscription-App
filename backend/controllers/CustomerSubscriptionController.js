const CustomerSubscription = require("../models/CustomerSubscription");

exports.createCustomerSubscription = async (req, res) => {
  const exists = await subscriptionExists(req.body.subscriptionId);
  if (exists) {
    return res.status(409).json({ message: "Subscription ID Already Exist" });
  }

  try {
    const {
      subscriptionId,
      customerId,
      packageId,
      packageType,
      subscriptionStatus,
      createdAt,
      createdBy,
    } = req.body;

    const subscription = await new CustomerSubscription({
      subscriptionId,
      customerId,
      packageId,
      packageType,
      subscriptionStatus,
      createdAt,
      createdBy,
    }).save();

    return res.json({
      subscription,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllCustomerSubscription = async (req, res) => {
  console.log("get all");
  const subscription = await CustomerSubscription.find();
  try {
    return res.json({
      subscription,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCustomerSubscriptionById = async (req, res) => {
  console.log("object");
  const exists = await subscriptionExists(req.params.id);
  if (!exists) {
    return res
      .status(404)
      .json({ message: "Customer Subscription does not exist" });
  }
  const subscription = await CustomerSubscription.findOne({
    subscriptionId: req.params.id,
  });
  try {
    return res.json({
      subscription,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteCustomerSubscription = async (req, res) => {
  const exists = await subscriptionExists(req.params.id);
  if (!exists) {
    return res
      .status(404)
      .json({ message: "Customer Subscription does not exist" });
  }
  const subscription = await CustomerSubscription.deleteOne({
    subscriptionId: req.params.id,
  });
  try {
    return res.json({
      subscription,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateCustomerSubscription = async (req, res) => {
  const exists = await subscriptionExists(req.params.id);
  if (!exists) {
    return res
      .status(404)
      .json({ message: "Customer Subscription does not exist" });
  }
  try {
    const subscription = await CustomerSubscription.findOneAndUpdate(
      { subscriptionId: req.params.id },
      {
        $set: req.body,
      }
    );
    return res.json({
      subscription,
    });
  } catch (err) {
    console.log(err);
  }
};

subscriptionExists = async (req, res) => {
  const value = await CustomerSubscription.findOne({ subscriptionId: req });
  if (value) {
    return true;
  } else {
    return false;
  }
};
