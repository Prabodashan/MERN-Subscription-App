const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  customerId: String,
  senderName: String,
  chat: [
    {
      message: String,
      createdBy: {
        type: String,
        required: true,
      },
      createdAt: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);
