import React from "react";
import PropTypes from "prop-types";

const Typography = (props) => {
  return <p className={props.variant}>{props.children}</p>;
};

export default Typography;

Typography.defaultProps = {
  variant: "normal",
};

Typography.propTypes = {
  variant: PropTypes.string,
};
