import React from "react";
import Col from "../../Layout/Col";
import propTypes from "prop-types";

const Text = (props) => {
  return (
    <Col styles="relative justify-center items-center">
      <input
        className={props.styles}
        type="text"
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

export default Text;

Text.defaultProps = {
  name: "",
  id: "",
  name: "",
  label: "",
  styles: "",
  required: false,
};
Text.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  styles: propTypes.string,
  required: propTypes.bool,
};
