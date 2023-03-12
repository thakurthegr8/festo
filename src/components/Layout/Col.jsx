import React from "react";
import PropTypes from "prop-types";

const Col = (props) => {
  return (
    <div className={`flex flex-col ${props.styles}`} ref={props.ref}>
      {props.children}
    </div>
  );
};

export default Col;

Col.defaultProps = {
  styles: "",
  ref: null,
};

Col.propTypes = {
  styles: PropTypes.string,
};
