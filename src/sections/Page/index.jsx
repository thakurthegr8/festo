import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const Page = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </>
  );
};

export default Page;

Page.defaultProps = {
  title: "New Page",
};

Page.propTypes = {
  title: PropTypes.string,
};
