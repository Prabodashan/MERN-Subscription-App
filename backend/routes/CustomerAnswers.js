const express = require("express");
const router = express.Router();

const { createCustomerAnswers, getCustomerAnswers, updateCustomerAnswers } = require("../controllers/CustomerAnswersController");

const { requireSignin } = require("../middlewares");

router.get("/", getCustomerAnswers);
// router.get("/:id", getPackageQuesitionsBypackageId); 
router.post("/", createCustomerAnswers);
// router.delete("/:id", deletePackageQuestion);
router.put("/", updateCustomerAnswers);

module.exports = router;