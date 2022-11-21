const express = require("express");
const router = express.Router();
const { createCustomerSubscription, getAllCustomerSubscription, getCustomerSubscriptionById, deleteCustomerSubscription, updateCustomerSubscription } = require("../controllers/CustomerSubscriptionController");


router.get("/:id", getCustomerSubscriptionById);
router.get("/", getAllCustomerSubscription);
router.post("/", createCustomerSubscription);
router.delete("/:id", deleteCustomerSubscription);
router.put("/:id", updateCustomerSubscription);

module.exports = router;
