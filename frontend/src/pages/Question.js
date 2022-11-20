import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context";

import TextBox from "../element/TextBox";
import Dropdown from "../element/Dropdown";
import RadioInput from "../element/RadioInput";
import MultipleFile from "./../element/MultipleFile";
import CheckBox from "../element/CheckBox";
import ColorPicker from "./../element/ColorPicker";

const Question = () => {
  const [state] = useContext(UserContext);
  const [questions, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (state && state.token) {
      if (localStorage.getItem("customerAnswer")) {
        setAnswers(JSON.parse(localStorage.getItem("customerAnswer")));
      }
      fetchQuestions();
    } else {
      // navigate("/login");
    }
  }, [state && state.token]);

  const fetchQuestions = async () => {
    const id = "01";
    try {
      const { data } = await axios.get("/package-questions/" + id);
      setQuestion(data["packageQuestion"]["package"]["questions"]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setAnswers((prevState) => ({
      ...prevState,
      [e.target.name]: { questionId: e.target.name, answer: e.target.value },
    }));

    localStorage.setItem("customerAnswer", JSON.stringify(answers));
  };

  const onHandleChange = ({ questionId, answer }) => {
    setAnswers((prevState) => ({
      ...prevState,
      [questionId]: { questionId, answer },
    }));

    localStorage.setItem("customerAnswer", JSON.stringify(answers));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userAnswers = [];

    for (var key in answers) {
      var obj = answers[key];
      userAnswers.push(obj);
      // ...
    }

    const data = {
      customerId: state.user._id,
      packageId: state.user.subscriptions[0].plan.id,
      orderId: "Order_" + Date.now().toString(),
      packageType: "p1",
      domainName: null,
      answers: userAnswers,
      domainPrice: null,
      customerAnswers: null,
      createdAt: Date("YYYY-MM-DD HH:mm:ss"),
      createdBy: state.user.name,
    };

    // console.log(state.user.subscriptions[0].plan.id);

    await axios
      .post("/order", data)
      .then((res) => {
        console.log(res);
        toast.success(`Successfully added data`);
      })
      .then(() => {
        navigate("/account");
      })
      .catch((err) => console.log(err));
  };

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
            <form onSubmit={handleSubmit}>
              <h5>Details about your website</h5>
              {questions &&
                questions.map((e, index) => {
                  // console.log(e);
                  // console.log(answers.q1.answer);
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
                        value={
                          answers[e.questionId]
                            ? answers[e.questionId]["answer"]
                            : ""
                        }
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
                        value={
                          answers[e.questionId]
                            ? answers[e.questionId]["answer"]
                            : ""
                        }
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
                        value={
                          answers[e.questionId]
                            ? answers[e.questionId]["answer"]
                            : ""
                        }
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
                        value={
                          answers[e.questionId]
                            ? answers[e.questionId]["answer"]
                            : ""
                        }
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
                        value={
                          answers[e.questionId]
                            ? answers[e.questionId]["answer"]
                            : "ffffff"
                        }
                      />
                    );
                  }
                })}
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-primary send-button">
                  submit
                </button>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
