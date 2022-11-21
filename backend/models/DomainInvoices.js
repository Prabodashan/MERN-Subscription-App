const mongoose = require("mongoose");

const DomainInvoicesSchema = mongoose.Schema({
    invoicesId: {
        type: String,
        required: true,
      },
      customerId: {
        type: String,
        required: true,
      },
      customerDomainId: {
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

module.exports = mongoose.model("DomainInvoices", DomainInvoicesSchema);


