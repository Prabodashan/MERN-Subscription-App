const CustomerJob = require("../models/CustomerJob");

exports.createCustomerJob = async (req, res) => {
  const exists = await customerJobExists(req.body.customerJobId);
  if (exists) {
    return res
      .status(409)
      .json({ message: "Customer Service ID Already Exist" });
  }

  try {
    const {
      customerJobId,
      orderId,
      customerWebsiteId,
      designerId,
      customerJobStatus,
      createdAt,
      createdBy,
    } = req.body;

    const customerJob = await new CustomerJob({
      customerJobId,
      orderId,
      customerWebsiteId,
      designerId,
      customerJobStatus,
      createdAt,
      createdBy,
    }).save();

    return res.json({
      customerJob,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllCustomerJobs = async (req, res) => {
  console.log("get all");
  const customerJobs = await CustomerJob.find();
  try {
    return res.json({
      customerJobs,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCustomerJobById = async (req, res) => {
  console.log("object");
  const exists = await customerJobExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Customer service does not exist" });
  }
  const customerJob = await CustomerJob.findOne({
    customerJobId: req.params.id,
  });
  try {
    return res.json({
      customerJob,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteCustomerJob = async (req, res) => {
  const exists = await customerJobExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Customer service does not exist" });
  }
  const customerJob = await CustomerJob.deleteOne({
    customerJobId: req.params.id,
  });
  try {
    return res.json({
      customerJob,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateCustomerJob = async (req, res) => {
  const exists = await customerJobExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Customer service does not exist" });
  }
  try {
    const customerJob = await CustomerJob.findOneAndUpdate(
      { customerJobId: req.params.id },
      {
        $set: req.body,
      }
    );
    return res.json({
      customerJob,
    });
  } catch (err) {
    console.log(err);
  }
};

customerJobExists = async (req, res) => {
  const value = await CustomerJob.findOne({ customerJobId: req });
  if (value) {
    return true;
  } else {
    return false;
  }
};
