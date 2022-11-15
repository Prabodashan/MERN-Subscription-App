const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    orderId: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
      required: true,
    },
    packageId: {
      type: String,
      required: true,
    },
    packageType: {
      type: String,
      required: true,
    },
    domainName: {
      type: String,
      // required: true,
    },
    domainPrice: {
      type: String,
      // required: true,
    },
    customerAnswers: {
      type: String,
      // required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
  });


  module.exports = mongoose.model("Order", orderSchema);