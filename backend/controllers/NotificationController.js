const { findOne } = require("../models/Notification");
const NotificationModel = require("../models/Notification");

exports.getNotificationByUserId = async (req, res) => {
  try {
    const Notification = await NotificationModel.find({
      recieverId: req.params.id,
    });
    return res.json({ Notification });
  } catch (error) {
    console.log(error);
  }
};

exports.createNotification = async (req, res) => {
  const {
    recieverId,
    notificationType,
    notificationTitle,
    notificationDescription,
    notificationStatus,
    createdAt,
    createdBy,
  } = req.body;
  try {
    const createNotif = await new NotificationModel({
      recieverId,
      notificationType,
      notificationTitle,
      notificationDescription,
      notificationStatus,
      createdAt,
      createdBy,
    }).save();
    return res.json({ message: "Notification Created Successfully" });
  } catch (error) {
    console.log(error);
  }
};

exports.updateNotificationStatus = async (req, res) => {
  const { notificationStatus } = req.body;
  try {
    const notifExists = await NotificationModel.findById({
      _id: req.params.id,
    });

    if (notifExists) {
      const notif = await NotificationModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            notificationStatus: notificationStatus,
          },
        }
      );
      return res.json({ message: "Notification successfully updated" });
    }
    return res.status(404).json({ message: "Notification not found" });
  } catch (error) {
    console.log(error);
  }
};
