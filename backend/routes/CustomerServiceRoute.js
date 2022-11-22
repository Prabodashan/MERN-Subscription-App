const express = require("express");
const router = express.Router();
const {
  createCustomerService,
  getAllCustomerServices,
  getCustomerServiceById,
  deleteCustomerService,
  updateCustomerService,
} = require("../controllers/CustomerServiceController");

router.get("/:id", getCustomerServiceById);
router.get("/", getAllCustomerServices);
router.post("/", createCustomerService);
router.delete("/:id", deleteCustomerService);
router.put("/:id", updateCustomerService);

module.exports = router;
