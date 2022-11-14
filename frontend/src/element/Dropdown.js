import React from "react";

const Dropdown = ({ label, answers }) => {
  console.log(answers);
  return (
    <div className="form-group">
      <label>{label}</label>
      <select className="form-select" aria-label="Default select example">
        <option selected>-- Select --</option>
        {answers.map((option, index) => (
          <option key={index} value={option.text}>
            {option.text}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default Dropdown;
