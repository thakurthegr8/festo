import AuthProvider from "@/src/providers/AuthProvider";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log(Component.auth);
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}
