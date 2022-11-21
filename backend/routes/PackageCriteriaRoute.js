const express = require("express");
const router = express.Router();
const {
  getPackageCriteria,
  createPackageCriteria,
  getPackageCriteriaById,
  updatePackagheCriteria,
  deletePackageCriteria,
} = require("../controllers/PackageCriteriaController");

router.get("/", getPackageCriteria);
router.get("/:id", getPackageCriteriaById);
router.post("/", createPackageCriteria);
router.put("/:id", updatePackagheCriteria);
router.delete("/:id", deletePackageCriteria);

module.exports = router;
