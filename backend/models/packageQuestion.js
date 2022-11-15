const mongoose = require("mongoose");

// Package Questionaries
const packageQuestionSchema = mongoose.Schema({
  package: {
    packageId: {
      type: String,
      required: true,
    },
    questions: [
      {
        questionId: String,
        questionDescription: String,
        answerType: String,
        answers: [
          {
            text: String,
            imageUrl: String,
            nextQuestion: {
              type: String,
            },
          },
        ],
        nextQuestion: String,
      },
    ],
    initialQuestion: String,
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

module.exports = mongoose.model("PackageQuestions", packageQuestionSchema);
