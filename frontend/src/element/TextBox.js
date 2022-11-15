import React from "react";

const TextBox = ({ label, type = "text", name, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        name={name}
        type={type}
        required
        className="form-control"
        onChange={(e) => handleChange(e)}
      />
      <br />
    </div>
  );
};

export default TextBox;
