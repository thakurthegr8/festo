import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AuthContext from "@/src/contexts/Auth";

const state = { user: null, loggedIn: false };

const AuthProvider = (props) => {
  const router = useRouter();
  const [authState, setAuthState] = useState(state);
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/404");
    },
  });
  useEffect(() => {
    if (status === "authenticated")
      setAuthState({ user: session, loggedIn: true });
  }, [status]);
  
  if (status == "loading") return "loading";

  return (
    <AuthContext.Provider value={authState}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
