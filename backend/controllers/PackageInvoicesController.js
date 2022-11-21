const PackageInvoices = require("../models/PackageInvoices");

exports.createPackageInvoices = async (req, res) => {
    const exists = await packageInvoicesExists(req.body.invoicesId);
    if (exists) {
        return res.status(409).json({ message: "Package Invoices ID Already Exist" });
    }

    try {
        const {
            invoicesId,
            customerId,
            customerSubscriptionId,
            amountToBePaid,
            paymentDueDate,
            paymentStatus,
        } = req.body;

        const packageInvoices = await new PackageInvoices({
            invoicesId,
            customerId,
            customerSubscriptionId,
            amountToBePaid,
            paymentDueDate,
            paymentStatus,
        }).save();

        return res.json({
            packageInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};



exports.getAllPackageInvoices = async (req, res) => {
    console.log("get all")
    const packageInvoices = await PackageInvoices.find();
    try {
        return res.json({
            packageInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};

exports.getPackageInvoicesById = async (req, res) => {
    console.log("object")
    const exists = await packageInvoicesExists(req.params.id);
    if (!exists) {
        return res.status(404).json({ message: "Customer Subscription does not exist" });
    }
    const packageInvoices = await PackageInvoices.findOne({ invoicesId: req.params.id });
    try {
        return res.json({
            packageInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};

exports.deletePackageInvoices = async (req, res) => {
    const exists = await packageInvoicesExists(req.params.id);
    if (!exists) {
        return res.status(404).json({ message: "Customer Subscription does not exist" });
    }
    const packageInvoices = await PackageInvoices.deleteOne({ invoicesId: req.params.id });
    try {
        return res.json({
            packageInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};

exports.updatePackageInvoices = async (req, res) => {
    const exists = await packageInvoicesExists(req.params.id);
    if (!exists) {
        return res.status(404).json({ message: "Customer Subscription does not exist" });
    }
    try {
        const packageInvoices = await PackageInvoices.findOneAndUpdate(
            { invoicesId: req.params.id },

            {
                $set: req.body,

            }
        );
        return res.json({
            packageInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};

packageInvoicesExists = async (req, res) => {
    const value = await PackageInvoices.findOne({ invoicesId: req });
    if (value) {
        return true;
    } else {
        return false;
    }
};