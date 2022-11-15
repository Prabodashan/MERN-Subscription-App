import React from "react";

const ColorPicker = ({ label, name, handleChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="color"
        name={name}
        className="form-control form-control-color"
        title="Choose your color"
        onChange={(e) => handleChange(e)}
      />
      <br />
    </div>
  );
};

export default ColorPicker;
