import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const Page = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      {props.children}
    </>
  );
};

export default Page;

Page.defaultProps = {
  title: "New Page",
  description: "Page description",
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
