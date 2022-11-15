const express = require("express");
const router = express.Router();

const { createPackageQuesitions, updatePackageQuestion, getPackageQuesitionsBypackageId } = require("../controllers/PackageQuestionController");

const { requireSignin } = require("../middlewares");

// router.get("/:id", getPackageQuesitions);
router.get("/:id", getPackageQuesitionsBypackageId); 
router.post("/", createPackageQuesitions);
// router.delete("/:id", deletePackageQuestion);
router.put("/:id", updatePackageQuestion);

module.exports = router;