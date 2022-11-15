import React from "react";

const ColorPicker = ({ label, name, value, handleChange }) => {
  const q = JSON.parse(localStorage.getItem("customerAnswer"));
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="color"
        name={name}
        className="form-control form-control-color"
        title="Choose your color"
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <br />
    </div>
  );
};

export default ColorPicker;
