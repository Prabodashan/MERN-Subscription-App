import React, { useEffect, useState } from "react";
import TextBox from "../element/TextBox";
import Dropdown from "../element/Dropdown";
import RadioInput from "../element/RadioInput";
import MultipleFile from "./../element/MultipleFile";
import CheckBox from "../element/CheckBox";
import ColorPicker from "./../element/ColorPicker";
import axios from "axios";

const Question = () => {
  const questions = [];

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const id = "01";
    try{
    const { data } = await axios.get("/package-questions/"+id);
    console.log(data["packageQuestion"]["package"]["questions"])
    data["packageQuestion"]["package"]["questions"].forEach((element) => {
      const value = {
        questionId: element.questionId,
        questionDescription: element.questionDescription,
        answerType: element.answerType,
        answers: element.answers
      };
      questions.push(value)
    });
  } catch (err){
    console.log(err)
  }
    // setQuestion(data);
  };

  const input = [
    {
      questionId: "1",
      questionDescription: "what is your name1?",
      answerType: "text",
      answers: [],
    },
    {
      questionId: "2",
      questionDescription: "Company Logo?",
      answerType: "file",
      answers: [],
    },
    {
      questionId: "3",
      questionDescription: "what is your logo color?",
      answerType: "color",
      answers: [],
    },
    {
      questionId: "4",
      questionDescription: "Gender",
      answerType: "radio",
      answers: [{ text: "Male" }, { text: "Female" }],
    },
    {
      questionId: "5",
      questionDescription: "domain ",
      answerType: "select",
      answers: [{ text: "Yes" }, { text: "No" }],
    },
    {
      questionId: "6",
      questionDescription: "what is your name6?",
      answerType: "checkbox",
      answers: [{ text: "Yes" }, { text: "No" }],
    },
    {
      questionId: "7",
      questionDescription: "what is your name7?",
      answerType: "date",
      answers: [],
    },
    {
      questionId: "8",
      questionDescription: "what is your name8?",
      answerType: "text",
      answers: [],
    },
  ];

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
              {questions.map((e, index) => {
                // console.log(e)
                if (e.answerType === "text" || e.answerType === "date") {
                  return (
                    <TextBox
                      key={index}
                      label={e.questionDescription}
                      type={e.answerType}
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
                      label={e.questionDescription}
                      answers={e.answers}
                    />
                  );
                }
                if (e.answerType === "checkbox") {
                  return (
                    <CheckBox
                      key={index}
                      label={e.questionDescription}
                      type={e.answerType}
                      answers={e.answers}
                    />
                  );
                }
                if (e.answerType === "color") {
                  return (
                    <ColorPicker key={index} label={e.questionDescription} />
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
