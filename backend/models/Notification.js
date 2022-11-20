const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
  recieverId: {
    type: String,
    required: true,
  },
  notificationType: {
    type: String,
    required: true,
  },
  notificationTitle: {
    type: String,
    required: true,
  },
  notificationDescription: {
    type: String,
    required: true,
  },
  notificationStatus: {
    type: String,
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

module.exports = mongoose.model("Notofication", NotificationSchema);
