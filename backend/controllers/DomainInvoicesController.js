const DomainInvoices = require("../models/DomainInvoices");

exports.createDomainInvoices = async (req, res) => {
    const exists = await domainInvoicesExists(req.body.invoicesId);
    if (exists) {
        return res.status(409).json({ message: "Domain Invoices ID Already Exist" });
    }

    try {
        const {
            invoicesId,
            customerId,
            customerDomainId,
            amountToBePaid,
            paymentDueDate,
            paymentStatus,
        } = req.body;

        const domainInvoices = await new DomainInvoices({
            invoicesId,
            customerId,
            customerDomainId,
            amountToBePaid,
            paymentDueDate,
            paymentStatus,
        }).save();

        return res.json({
            domainInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};



exports.getAllDomainInvoices = async (req, res) => {
    console.log("get all")
    const domainInvoices = await DomainInvoices.find();
    try {
        return res.json({
            domainInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};

exports.getDomainInvoicesById = async (req, res) => {
    console.log("object")
    const exists = await domainInvoicesExists(req.params.id);
    if (!exists) {
        return res.status(404).json({ message: "Domain Invoices does not exist" });
    }
    const domainInvoices = await DomainInvoices.findOne({ invoicesId: req.params.id });
    try {
        return res.json({
            domainInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};

exports.deleteDomainInvoices = async (req, res) => {
    const exists = await domainInvoicesExists(req.params.id);
    if (!exists) {
        return res.status(404).json({ message: "Domain Invoices does not exist" });
    }
    const domainInvoices = await DomainInvoices.deleteOne({ invoicesId: req.params.id });
    try {
        return res.json({
            domainInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};

exports.updateDomainInvoices = async (req, res) => {
    const exists = await domainInvoicesExists(req.params.id);
    if (!exists) {
        return res.status(404).json({ message: "Domain Invoices does not exist" });
    }
    try {
        const domainInvoices = await DomainInvoices.findOneAndUpdate(
            { invoicesId: req.params.id },

            {
                $set: req.body,

            }
        );
        return res.json({
            domainInvoices,
        });
    } catch (err) {
        console.log(err);
    }
};

domainInvoicesExists = async (req, res) => {
    const value = await DomainInvoices.findOne({ invoicesId: req });
    if (value) {
        return true;
    } else {
        return false;
    }
};