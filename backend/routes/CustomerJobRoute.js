const express = require("express");
const router = express.Router();
const {
  createCustomerJob,
  getAllCustomerJobs,
  getCustomerJobById,
  deleteCustomerJob,
  updateCustomerJob,
} = require("../controllers/CustomerJobController");

router.get("/:id", getCustomerJobById);
router.get("/", getAllCustomerJobs);
router.post("/", createCustomerJob);
router.delete("/:id", deleteCustomerJob);
router.put("/:id", updateCustomerJob);

module.exports = router;
