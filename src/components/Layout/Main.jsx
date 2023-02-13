import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  return <article className={props.styles}>{props.children}</article>;
};

export default Main;

Main.defaultProps = {
  styles: "",
};

Main.propTypes = {
  styles: PropTypes.string,
};
