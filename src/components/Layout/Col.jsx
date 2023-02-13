import React from "react";
import PropTypes from "prop-types";

const Col = (props) => {
  return (
    <div className={`flex flex-col ${props.styles}`}>{props.children}</div>
  );
};

export default Col;

Col.defaultProps = {
  styles: "",
};

Col.propTypes = {
  styles: PropTypes.string,
};
