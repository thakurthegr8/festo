import React from "react";
import Col from "../../Layout/Col";
import propTypes from "prop-types";

const Password = (props) => {
  return (
    <Col styles="relative justify-center items-center">
      <input
        className={props.styles}
        type="password"
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

export default Password;

Password.defaultProps = {
  name: "",
  id: "",
  name: "",
  label: "",
  styles: "",
  required: false,
};
Password.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  styles: propTypes.string,
  required: propTypes.bool,
};
