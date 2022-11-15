const express = require("express");
const router = express.Router();

const { sendMail } = require("../Controllers/MailController");

router.post("/", sendMail);

module.exports = router;
