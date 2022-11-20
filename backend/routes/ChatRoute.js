const express = require("express");
const router = express.Router();
const {
  getChat,
  getChatByCustomerId,
  creatChat,
  updateChat,
} = require("../controllers/ChatController");

const { requireSignin } = require("../middlewares");

router.get("/", getChat);
router.get("/:customerId", getChatByCustomerId);
router.post("/", creatChat);
router.put("/:customerId", updateChat);

module.exports = router;
