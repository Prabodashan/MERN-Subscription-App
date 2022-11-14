import React from "react";

const TextBox = ({ label, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input type={type} required className="form-control" />
      <br />
    </div>
  );
};

export default TextBox;
