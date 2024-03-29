import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, Router } from "next/router";
import AuthContext from "@/src/contexts/Auth";
import Loader from "@/src/elements/Loader";
import Col from "@/src/components/Layout/Col";

const state = { user: null, loggedIn: false };

const AuthProvider = (props) => {
  const router = useRouter();
  const [authState, setAuthState] = useState(state);
  const { status, data: session } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      const user = session.user;
      setAuthState({ user, loggedIn: true });
    }
    console.log(status);
  }, [status]);
  if (status === "unauthenticated") {
    if (props.withAuth) {
      router.push("/404", "/");
      return null;
    }
    return props.children;
  }
  if (status === "loading" || !authState.user)
    return (
      <Col styles="fixed inset-0 flex justify-center items-center">
        <Loader />
      </Col>
    );
  if (status === "authenticated")
    return (
      <AuthContext.Provider value={authState}>
        {props.children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;
