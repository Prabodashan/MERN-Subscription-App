import React, { useEffect, useState } from "react";

const CheckBox = ({
  label,
  answers,
  name,
  value,
  type = "checkbox",
  handleChange,
}) => {
  const [check, setCheck] = useState([]);

  const onClickCheck = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheck([...check, value]);
    } else {
      setCheck(check.filter((item) => item !== value));
    }

    // handleChange({ questionId: name, answer: check });
  };

  // const checkOrNOt = (v) => {
  //   value.forEach((element) => {
  //     if (element === v) {
  //       return setChecked(true);
  //     }
  //   });
  //   return setChecked(false);
  // };

  useEffect(() => {
    handleChange({ questionId: name, answer: check });
  }, [check]);

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
              onChange={(e) => onClickCheck(e)}
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
