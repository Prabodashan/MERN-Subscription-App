const Question = require("../models/question");

exports.createQuestion = async (req, res) => {
  const exists = await questionExists(req.body.questionId);
  if (exists) {
    return res.status(409).json({ message: "Question ID Alread Exist" });
  }

  try {
    const {
      questionId,
      questionDescription,
      answerType,
      answers,
      createdAt,
      createdBy,
    } = req.body;

    const question = await new Question({
      questionId,
      questionDescription,
      answerType,
      answers,
      createdAt,
      createdBy,
    }).save();

    return res.json({
      question,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllQuestions = async (req, res) => {
  const questions = await Question.find();
  try {
    return res.json({
      questions,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getQuestionById = async (req, res) => {
  const exists = await questionExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Question does not exist" });
  }
  const question = await Question.findOne({ questionId: req.params.id });
  try {
    return res.json({
      question,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteQuestion = async (req, res) => {
  const exists = await questionExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Question does not exist" });
  }
  const question = await Question.deleteOne({ questionId: req.params.id });
  try {
    return res.json({
      question,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateQuestion = async (req, res) => {
  const exists = await questionExists(req.params.id);
  if (!exists) {
    return res.status(404).json({ message: "Question does not exist" });
  }
  try {
    const question = await Question.findOneAndUpdate(
      { questionId: req.params.id },
      {
        $set: req.body,
      }
    );
    return res.json({
      question,
    });
  } catch (err) {
    console.log(err);
  }
};

questionExists = async (req, res) => {
  const value = await Question.findOne({ questionId: req });
  if (value) {
    return true;
  } else {
    return false;
  }
};

// exports.getInitialQuestion = async (req, res) => {
//     const question = await Question.findOne({ pakageId: req.params.id,  });
//     try {
//       return res.json({
//         question,
//       });
//     } catch (err) {
//       console.log(err);
//     }
// };
