const express = require("express");
const router = express.Router();

const {
  prices,
  createSubscription,
  subscriptionStatus,
} = require("../controllers/subs");
const { requireSignin } = require("../middlewares");

router.get("/prices", prices);

router.post("/create-subscription", requireSignin, createSubscription);
router.get("/subscription-status", requireSignin, subscriptionStatus);

module.exports = router;
