import React from "react";
import PropTypes from "prop-types";

const Loading = () => (
  <span className="w-6 h-6 animate-spin border-transparent border-t-primary  border rounded-full block"></span>
);

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button
      className={`${props.size} ${props.variant}`}
      onClick={onClick}
      type={props.type}
      disabled={props.loading || props.disabled}
    >
      {props.loading ? <Loading /> : children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  size: "btn",
  variant: "btn-primary",
  type: "submit",
  loading: false,
  onClick: (e) => null,
};

Button.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
