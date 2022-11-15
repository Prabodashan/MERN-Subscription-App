import React from "react";

const Dropdown = ({ label, answers, value, name, handleChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        name={name}
        className="form-select"
        aria-label="Default select example"
        value={value}
        onChange={(e) => handleChange(e)}
      >
        <option>-- Select --</option>
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
