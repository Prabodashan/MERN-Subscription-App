const express = require("express");
const router = express.Router();
const { createPackageInvoices, getAllPackageInvoices, getPackageInvoicesById, deletePackageInvoices, updatePackageInvoices } = require("../controllers/PackageInvoicesController");


router.get("/:id", getPackageInvoicesById);
router.get("/", getAllPackageInvoices);
router.post("/", createPackageInvoices);
router.delete("/:id", deletePackageInvoices);
router.put("/:id", updatePackageInvoices);

module.exports = router;
