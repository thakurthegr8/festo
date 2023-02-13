import React from "react";
import PropTypes from "prop-types";

const Grid = (props) => {
  return (
    <div className={`grid grid-flow ${props.styles}`}>{props.children}</div>
  );
};

export default Grid;

Grid.defaultProps = {
  styles: "",
};

Grid.propTypes = {
  styles: PropTypes.string,
};
