import React from "react";

const MultipleFile = ({ label, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input className="form-control" type={type} id="formFileMultiple" multiple />
      <br />
    </div>
  );
};

export default MultipleFile;
