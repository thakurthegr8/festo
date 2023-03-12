import React from "react";
import PropTypes from "prop-types";

const Typography = (props) => {
  return (
    <p className={props.variant} role={props.role}>
      {props.children}
    </p>
  );
};

export default Typography;

Typography.defaultProps = {
  variant: "normal",
  role: "description",
};

Typography.propTypes = {
  variant: PropTypes.string,
  role: PropTypes.string,
};
