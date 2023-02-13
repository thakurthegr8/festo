import React from "react";
import propTypes from "prop-types";

const fancyStyle = `before:top-4 before:left-4 after:top-6 after:left-6 before:'' before:bg-secondary  before:absolute before:w-full before:h-full before:border-2 before:border-black before:-z-10 before:rounded-md
after:''  after:absolute after:w-full after:h-full after:border-2 after:border-black after:-z-20  after:bg-primary after:rounded-md `;

const Card = (props) => {
  return (
    <div
      className={`relative border-2 border-black p-4 rounded-md bg-white ${props.fancy && fancyStyle}`}
    >
      {props.children}
    </div>
  );
};

export default Card;


Card.propTypes = {
  fancy:propTypes.bool
}