const mongoose = require("mongoose");

// Questions
const questionSchema = mongoose.Schema({
  questionId: {
    type: String,
    required: true,
    dropDups: true,
  },
  questionDescription: {
    type: String,
    required: true,
  },
  answerType: {
    type: String,
    required: true,
  },
  answers: [
    {
      text: String,
      imageUrl: String,
      nextQuestion: {
        type: String,
      },
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

module.exports = mongoose.model("Question", questionSchema);
