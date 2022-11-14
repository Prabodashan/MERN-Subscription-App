const express = require("express");
const router = express.Router();

const { createCustomerAnswers, getCustomerAnswers } = require("../controllers/CustomerAnswersController");

const { requireSignin } = require("../middlewares");

router.get("/", getCustomerAnswers);
// router.get("/:id", getPackageQuesitionsBypackageId); 
router.post("/", createCustomerAnswers);
// router.delete("/:id", deletePackageQuestion);
// router.put("/:id", updateCustomerAnswers);

module.exports = router;