import React from "react";

const RadioInput = ({ label, answers, name, type = "radio" }) => {
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

    // <div className="input-box">
    //   <label>{label}</label>
    //   <label>
    //     {answers.map((answer, index) => {
    //       return (
    //         <div key={index}>
    //           <input type="radio" value={answer.text} name={name} />
    //           {" " + answer.text}
    //         </div>
    //       );
    //     })}
    //   </label>
    // </div>
  );
};

export default RadioInput;
