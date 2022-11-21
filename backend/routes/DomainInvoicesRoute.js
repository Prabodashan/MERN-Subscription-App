const express = require("express");
const router = express.Router();
const { createDomainInvoices, getAllDomainInvoices, getDomainInvoicesById, deleteDomainInvoices, updateDomainInvoices } = require("../controllers/DomainInvoicesController");

router.get("/:id", getDomainInvoicesById);
router.get("/", getAllDomainInvoices);
router.post("/", createDomainInvoices);
router.delete("/:id", deleteDomainInvoices);
router.put("/:id", updateDomainInvoices);

module.exports = router;
