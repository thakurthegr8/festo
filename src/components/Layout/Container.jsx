import React from "react";
import PropTypes from "prop-types";

const Container = (props) => {
  return (
    <section className={`container mx-auto 3xl:px-0 block ${props.styles}`}>
      {props.children}
    </section>
  );
};

export default Container;

Container.defaultProps = {
  styles: "",
};

Container.propTypes = {
  styles: PropTypes.string,
};
