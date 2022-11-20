const express = require("express");
const router = express.Router();

const {
  getOrderById,
  getOrders,
  createOrder,
  updateOrderStatus,
  getOrderByCustomerIdAndPackageId,
} = require("../controllers/OrderController");

const { requireSignin } = require("../middlewares");

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.get("/:customerId/:packageId", getOrderByCustomerIdAndPackageId);
router.post("/", createOrder);
// router.delete("/:id", deletePackageQuestion);
router.put("/status/:id", updateOrderStatus);

module.exports = router;
