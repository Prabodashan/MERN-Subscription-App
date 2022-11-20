const express = require("express");
const router = express.Router();

const { sendMail } = require("../controllers/MailController");

router.post("/", sendMail);

module.exports = router;
