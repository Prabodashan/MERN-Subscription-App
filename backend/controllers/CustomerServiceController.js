const CustomerService = require("../models/CustomerService");

exports.createCustomerService = async (req, res) => {
  const exists = await customerServiceExists(req.body.customerServiceId);
  if (exists) {
    return res
      .status(409)
      .json({ message: "Customer Service ID Already Exist" });
  }

  try {
    const {
      customerServiceId,
      orderId,
      customerWebsiteId,
      designerId,
      customerJobStatus,
      createdAt,
      createdBy,
    } = req.body;

    const customerService = await new CustomerService({
      customerServiceId,
      orderId,
      customerWebsiteId,
      designerId,
      customerJobStatus,
      createdAt,
      createdBy,
    }).save();

    return res.json({
      customerService,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllCustomerServices = async (req, res) => {
  console.log("get all");
  const customerServices = await CustomerService.find();
  try {
    return res.json({
      customerServices,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCustomerServiceById = async (req, res) => {
  console.log("object");
  const exists = await customerServiceExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Customer service does not exist" });
  }
  const customerService = await CustomerService.findOne({
    customerServiceId: req.params.id,
  });
  try {
    return res.json({
      customerService,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteCustomerService = async (req, res) => {
  const exists = await customerServiceExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Customer service does not exist" });
  }
  const customerService = await CustomerService.deleteOne({
    customerServiceId: req.params.id,
  });
  try {
    return res.json({
      customerService,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateCustomerService = async (req, res) => {
  const exists = await customerServiceExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Customer service does not exist" });
  }
  try {
    const customerService = await CustomerService.findOneAndUpdate(
      { customerServiceId: req.params.id },
      {
        $set: req.body,
      }
    );
    return res.json({
      customerService,
    });
  } catch (err) {
    console.log(err);
  }
};

customerServiceExists = async (req, res) => {
  const value = await CustomerService.findOne({ customerServiceId: req });
  if (value) {
    return true;
  } else {
    return false;
  }
};
