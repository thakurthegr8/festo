import React from "react";
import Col from "../../Layout/Col";
import propTypes from "prop-types";

const Time = (props) => {
  return (
    <Col styles="relative justify-center items-center">
      <input
        className={props.styles}
        type="time"
        name={props.name}
        id={props.id}
        placeholder="placeholder"
        required={props.required}
      />
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

export default Time;

Time.defaultProps = {
  name: "",
  id: "",
  name: "",
  label: "",
  styles: "",
  required: false,
};

Time.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  styles: propTypes.string,
  required: propTypes.bool,
};
