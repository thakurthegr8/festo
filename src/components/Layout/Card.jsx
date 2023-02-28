import React from "react";
import propTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="relative border shadow-md p-4 rounded-md bg-gray-100">
      {props.children}
    </div>
  );
};

export default Card;
