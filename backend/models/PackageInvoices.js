const mongoose = require("mongoose");

const PackageInvoicesSchema = mongoose.Schema({
    invoicesId: {
        type: String,
        required: true,
      },
      customerId: {
        type: String,
        required: true,
      },
      customerSubscriptionId: {
        type: String,
        required: true,
      },
      amountToBePaid: {
        type: Number,
        required: true,
      },
      paymentDueDate: {
        type: String,
        required: true,
      },
      paymentStatus: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model("PackageInvoices", PackageInvoicesSchema);


