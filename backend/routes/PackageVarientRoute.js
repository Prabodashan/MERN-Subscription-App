const express = require("express");
const router = express.Router();

const {
  getPackageVarients,
  createPackageVarient,
  updatePackageVarients,
  getPackageVarientsById,
  deletePackageVarientById,
} = require("../controllers/PackageVarientController");

router.get("/", getPackageVarients);
router.get("/:id", getPackageVarientsById);
router.post("/", createPackageVarient);
router.put("/:id", updatePackageVarients);
router.delete("/:id", deletePackageVarientById);

module.exports = router;
