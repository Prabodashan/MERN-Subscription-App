const express = require("express");
const router = express.Router();

const { getOrderById, getOrders, createOrder } = require("../controllers/OrderController");

const { requireSignin } = require("../middlewares");

router.get("/", getOrders);
router.get("/:id", getOrderById); 
router.post("/", createOrder);
// router.delete("/:id", deletePackageQuestion);
// router.put("/:id", updateCustomerAnswers);

module.exports = router;