import React, { useEffect, useState } from "react";
import TextBox from "../element/TextBox";
import Dropdown from "../element/Dropdown";
import RadioInput from "../element/RadioInput";
import MultipleFile from "./../element/MultipleFile";
import CheckBox from "../element/CheckBox";
import ColorPicker from "./../element/ColorPicker";
import axios from "axios";

const Question = () => {
  const [questions, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchQuestions();

    setAnswers(JSON.parse(localStorage.getItem("customerAnswer")));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("customerAnswer", JSON.stringify(answers));
  // }, [answers]);

  const fetchQuestions = async () => {
    const id = "01";
    try {
      const { data } = await axios.get("/package-questions/" + id);
      // console.log(data);
      // data["packageQuestion"]["package"]["questions"].forEach((element) => {
      //   const value = {
      //     questionId: element.questionId,
      //     questionDescription: element.questionDescription,
      //     answerType: element.answerType,
      //     answers: element.answers,
      //   };
      //   questions.push(value);
      // });

      setQuestion(data["packageQuestion"]["package"]["questions"]);
    } catch (err) {
      console.log(err);
    }
    // setQuestion(data);
  };

  const handleChange = (e) => {
    // setAnswers([...answers, { questionId: questionId, answer: answer }]);
    setAnswers((prevState) => ({
      ...prevState,
      [e.target.name]: { questionId: e.target.name, answer: e.target.value },
    }));

    localStorage.setItem("customerAnswer", JSON.stringify(answers));
  };

  const onHandleChange = ({ questionId, answer }) => {
    // console.log(questionId);
    // setAnswers([...answers, { questionId: questionId, answer: answer }]);
    setAnswers((prevState) => ({
      ...prevState,
      [questionId]: { questionId, answer },
    }));

    localStorage.setItem("customerAnswer", JSON.stringify(answers));
  };

  console.log(answers);

  return (
    <div className="container">
      <div className="col-md-6 mx-auto text-center">
        <div className="header-title">
          <h1 className="wv-heading--title">ReactJS Form with Validation</h1>
          <h2 className="wv-heading--subtitle">React bootstrap</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="myform form ">
            <form>
              <h5>Details about your website</h5>
              {questions &&
                questions.map((e, index) => {
                  // console.log(e);
                  if (
                    e.answerType === "text" ||
                    e.answerType === "date" ||
                    e.answerType === "email"
                  ) {
                    return (
                      <TextBox
                        key={index}
                        name={e.questionId}
                        label={e.questionDescription}
                        type={e.answerType}
                        handleChange={handleChange}
                      />
                    );
                  }
                  if (e.answerType === "radio") {
                    return (
                      <RadioInput
                        key={index}
                        label={e.questionDescription}
                        name={e.questionId}
                        type={e.answerType}
                        answers={e.answers}
                        handleChange={handleChange}
                      />
                    );
                  }
                  if (e.answerType === "file") {
                    return (
                      <MultipleFile
                        key={index}
                        label={e.questionDescription}
                        type={e.answerType}
                      />
                    );
                  }
                  if (e.answerType === "select") {
                    return (
                      <Dropdown
                        key={index}
                        name={e.questionId}
                        label={e.questionDescription}
                        answers={e.answers}
                        handleChange={handleChange}
                      />
                    );
                  }
                  if (e.answerType === "checkbox") {
                    return (
                      <CheckBox
                        key={index}
                        name={e.questionId}
                        label={e.questionDescription}
                        type={e.answerType}
                        answers={e.answers}
                        handleChange={onHandleChange}
                      />
                    );
                  }
                  if (e.answerType === "color") {
                    return (
                      <ColorPicker
                        key={index}
                        name={e.questionId}
                        label={e.questionDescription}
                        handleChange={handleChange}
                      />
                    );
                  }
                })}
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-primary send-button">
                  Add Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
