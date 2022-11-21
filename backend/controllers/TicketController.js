const Ticket = require("../models/ticket");

exports.createTicket = async (req, res) => {
  const exists = await ticketExists(req.body.TicketId);
  if (exists) {
    return res.status(409).json({ message: "Ticket ID Alread Exist" });
  }

  try {
    const {
      ticketId,
      userId,
      userType,
      ticketType,
      ticketTitle,
      ticketDescription,
      ticketAttachment,
      ticketReply,
      ticketReplyAttachment,
      createdAt,
      createdBy,
    } = req.body;

    const ticket = await new Ticket({
      ticketId,
      userId,
      userType,
      ticketType,
      ticketTitle,
      ticketDescription,
      ticketAttachment,
      ticketReply,
      ticketReplyAttachment,
      createdAt,
      createdBy,
    }).save();

    return res.json({
      ticket,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllTickets = async (req, res) => {
  const tickets = await Ticket.find();
  try {
    return res.json({
      tickets,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getTicketById = async (req, res) => {
  const exists = await ticketExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Ticket does not exist" });
  }
  const ticket = await Ticket.findOne({ ticketId: req.params.id });
  try {
    return res.json({
      ticket,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTicket = async (req, res) => {
  const exists = await ticketExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Ticket does not exist" });
  }
  const ticket = await Ticket.deleteOne({ ticketId: req.params.id });
  try {
    return res.json({
      ticket,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateTicket = async (req, res) => {
  const exists = await ticketExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Ticket does not exist" });
  }
  try {
    const ticket = await Ticket.findOneAndUpdate(
      { ticketId: req.params.id },
      {
        $set: req.body,
      }
    );
    return res.json({
      ticket,
    });
  } catch (err) {
    console.log(err);
  }
};

ticketExists = async (req, res) => {
  const value = await Ticket.findOne({ ticketId: req });
  if (value) {
    return true;
  } else {
    return false;
  }
};