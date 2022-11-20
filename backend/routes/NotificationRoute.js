const express = require("express");
const router = express.Router();
const { createNotification, getNotificationByUserId, updateNotificationStatus } = require("../controllers/NotificationController");

const { requireSignin } = require("../middlewares");

router.get("/:id", getNotificationByUserId);
router.post("/", createNotification);
router.put("/:id", updateNotificationStatus);

module.exports = router;
