const mongoose = require("mongoose");

const CustomerSubscriptionSchema = mongoose.Schema({
    subscriptionId: {
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
    subscriptionStatus: {
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

module.exports = mongoose.model("CustomerSubscription", CustomerSubscriptionSchema);
