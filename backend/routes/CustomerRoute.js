const express = require("express");
const router = express.Router();
const {
  getCustomers,
  createCustomers,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
} = require("../controllers/CustomerController");

const { requireSignin } = require("../middlewares");

router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.post("/", createCustomers);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
