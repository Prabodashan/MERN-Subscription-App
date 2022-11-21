const express = require("express");
const router = express.Router();
const { createTicket, getAllTickets, getTicketById, deleteTicket, updateTicket } = require("../controllers/TicketController");


router.get("/:id", getTicketById);
router.get("/", getAllTickets);
router.post("/", createTicket);
router.delete("/:id", deleteTicket);
router.put("/:id", updateTicket);

module.exports = router;