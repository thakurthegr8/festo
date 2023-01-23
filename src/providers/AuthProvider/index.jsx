import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AuthProvider = (props) => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/404");
    },
  });
  if (status == "loading") return "loading";
  return <>{props.children}</>;
};

export default AuthProvider;
