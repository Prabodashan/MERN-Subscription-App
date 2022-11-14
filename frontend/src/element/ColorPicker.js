import React from "react";

const ColorPicker = ({ label }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="color"
        class="form-control form-control-color"
        id="exampleColorInput"
        value="#563d7c"
        title="Choose your color"
      />
      <br />
    </div>
  );
};

export default ColorPicker;
