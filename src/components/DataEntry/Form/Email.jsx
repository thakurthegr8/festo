import React from "react";
import Col from "../../Layout/Col";
import propTypes from "prop-types";

const Email = (props) => {
  return (
    <Col styles="relative justify-center items-center">
      <input
        className={props.styles}
        type="Email"
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
      <p className="message" ></p>
    </Col>
  );
};

export default Email;

Email.defaultProps = {
  name: "",
  id: "",
  name: "",
  label: "",
  required: false,
  styles: "",
};
Email.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  required: propTypes.bool,
  styles: propTypes.string,
};
