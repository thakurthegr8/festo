import React, { useState } from "react";
import Col from "../../Layout/Col";
import propTypes from "prop-types";

const Select = (props) => {
  const [dataValue, setDataValue] = useState("none");
  return (
    <Col styles="relative justify-center items-center">
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setDataValue(e.target.value);
        }}
        className={props.styles}
        name={props.name}
        id={props.id}
        placeholder="placeholder"
        datavalue={dataValue}
      >
        <option value="none" selected>
          None
        </option>
        {props.options &&
          props.options.map((item, index) => (
            <option value={item.value} key={index}>
              {item.placeholder}
            </option>
          ))}
      </select>
      <span className="input-animated-bar bg-primary"></span>
      {props.label && (
        <label className="absolute left-0" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <p className="message" htmlFor={props.id}></p>
    </Col>
  );
};

export default Select;

Select.defaultProps = {
  name: "",
  id: "",
  name: "",
  label: "",
  styles: "",
  options: [{ placeholder: "option", value: "option" }],
};
Select.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  styles: propTypes.string,
  options: propTypes.array,
};
