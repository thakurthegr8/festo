import React from "react";
import PropTypes from "prop-types";

const Row = (props) => {
  return <div className={`flex ${props.styles}`}>{props.children}</div>;
};

export default Row;

Row.defaultProps = {
  styles: "",
};

Row.propTypes = {
  styles: PropTypes.string,
};
