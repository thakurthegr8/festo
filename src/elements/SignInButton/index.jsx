import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@/src/components/General/Button";
import { signIn } from "next-auth/react";

const SignInButton = (props) => {
  const [loading, setLoading] = useState(false);
  const signin = () => {
    setLoading(true);
    signIn("okta", { callbackUrl: props.callbackUrl });
  };
  return (
    <Button onClick={signin} variant="btn-primary btn-sm" loading={loading}>
      Sign in
    </Button>
  );
};

SignInButton.defaultProps = {
  callbackUrl: "/events",
};
SignInButton.propTypes = {
  callbackUrl: PropTypes.string,
};

export default SignInButton;
