const express = require("express");
const router = express.Router();
const {
  getPackageById,
  getPackages,
  createPackage,
  updatePackage,
  deletePackage,
} = require("../controllers/PackageController");

router.get("/", getPackages);
router.get("/:id", getPackageById);
router.post("/", createPackage);
router.put("/:id", updatePackage);
router.delete("/:id", deletePackage);

module.exports = router;