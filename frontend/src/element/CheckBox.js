import React from "react";

const CheckBox = ({ label, answers, name, type = "checkbox" }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <br />
      {answers.map((answer, index) => {
        return (
          <div className="form-check form-check-inline" key={index}>
            <input
              className="form-check-input"
              type={type}
              value={answer.text}
              name={name}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              {answer.text}
            </label>
          </div>
        );
      })}
      <br />
      <br />
    </div>
  );
};

export default CheckBox;
