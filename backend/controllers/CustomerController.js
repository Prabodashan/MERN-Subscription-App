const customerSchema = require("../models/Customer");

exports.getCustomers = async (req, res) => {
  try {
    const customers = await customerSchema.find();
    if (customers) {
      return res.status(200).json(customers);
    } else {
      return res.status(400).json({ message: "No Customers Found" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await customerSchema.findById(req.params.id);
    if (customer) {
      return res.status(200).json(customer);
    } else {
      return res.status(400).json({ message: "No Customers Found" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.createCustomers = async (req, res) => {
  const {
    firstName,
    lastName,
    businessName,
    emailAddress,
    phoneNumber,
    createdAt,
    createdBy,
  } = req.body;
  try {
    const customerExists = await customerSchema.findOne({
      emailAddress: emailAddress,
    });
    if (customerExists) {
      return res.status(409).json({ message: "Email Already Exists" });
    }
    const customer = await new customerSchema({
      firstName,
      lastName,
      businessName,
      emailAddress,
      phoneNumber,
      createdAt,
      createdBy,
    }).save();
    return res.status(201).json(customer);
  } catch (e) {
    console.log(e);
  }
};

exports.updateCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    const customerIdExist = await customerSchema.findById(customerId);
    if (!customerIdExist) {
      return res.status(404).json({ message: "Customer not found" });
    }
    const customer = await customerSchema.findOneAndUpdate(
      { _id: customerId },
      {
        $set: req.body,
      },
      {
        new: false,
      }
    );
    return res.status(200).json(customer);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    const customerIdExist = await customerSchema.findById(customerId);
    if (!customerIdExist) {
      return res.status(404).json({ message: "Customer not found" });
    }
    const customer = await customerSchema.findOneAndDelete({ _id: customerId });
    console.log(customer.firstName);
    return res
      .status(200)
      .json({
        message:
          "Customer successfully deleted :" +
          customer.firstName +
          " " +
          customer.lastName,
      });
  } catch (error) {
    console.log(error);
  }
};
