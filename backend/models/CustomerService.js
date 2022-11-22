const mongoose = require("mongoose");

// Questions
const customerServiceSchema = mongoose.Schema({
  customerJobId: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  customerWebsiteId: {
    type: String,
    required: true,
  },
  designerId: {
    type: String,
    required: true,
  },
  customerJobStatus: {
    type: String,
    required: true,
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

module.exports = mongoose.model("CustomerService", customerServiceSchema);
