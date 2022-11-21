const mongoose = require("mongoose");

// Questions
const ticketSchema = mongoose.Schema({
    ticketId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },
    ticketType: {
        type: String,
        required: true,
    },
    ticketTitle: {
        type: String,
        required: true,
    },
    ticketDescription: {
        type: String,
        required: true,
    },
    ticketAttachment: {
        type: Number,
        required: true,
    },
    ticketReply: {
        type: String,
        required: true,
    },
    ticketReplyAttachment: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Ticket", ticketSchema);
