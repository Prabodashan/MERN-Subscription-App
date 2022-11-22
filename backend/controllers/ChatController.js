const ChatModel = require("../models/Chat");

exports.getChat = async (req, res) => {
  try {
    const chat = await ChatModel.find();

    return res.json({
      chat,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getChatByCustomerId = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({ customerId: req.params.customerId });
    return res.json({
      chat,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.creatChat = async (req, res) => {
  const { chat, customerId, senderName } = req.body;
  try {
    const chatExist = await ChatModel.findOne({ customerId: customerId });
    if (!chatExist) {
      const chatCreate = await new ChatModel({
        customerId,
        senderName,
        chat,
      }).save();
      return res.json({
        chatCreate,
      });
    }
    return res.json({message:"AlreadyExists"});
  } catch (error) {
    console.log(error);
  }
};

exports.updateChat = async (req, res) => {
  const { chat, customerId } = req.body;
  try {
    const chatTrail = await ChatModel.findOne({ customerId: customerId });
    if (chatTrail) {
      const chatUpdated = await ChatModel.updateOne(
        {
          customerId: customerId,
        },
        { $push: { chat: chat } }
      );
      return res.json({ chatUpdated });
    }
    return res.status(404).json({ message: "Chat not found" });
  } catch (error) {
    console.log(errot);
  }
};
