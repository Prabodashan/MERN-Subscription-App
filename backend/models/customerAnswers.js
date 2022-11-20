const mongoose = require("mongoose");

const customerAnswersSchema = mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  answers: [
    {
      questionId: String,
      answer: [],
    },
  ],
  createdAt: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("customerAnswers", customerAnswersSchema);
