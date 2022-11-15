const express = require("express");
const router = express.Router();

const {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  deleteQuestion,
  updateQuestion
} = require("../controllers/QuestionController");

const { requireSignin } = require("../middlewares");

router.get("/", getAllQuestions);
router.get("/:id", getQuestionById);
router.post("/", createQuestion);
router.delete("/:id", deleteQuestion);
router.put("/:id", updateQuestion);

module.exports = router;
