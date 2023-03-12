import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Router } from "next/router";
import nProgress from "nprogress";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/src/providers/AuthProvider";


Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      ) : (
        <Component {...pageProps} />
      )}
      <ToastContainer
        autoClose={5000}
        className="capitalize rounded-xl p-4"
        theme="colored"
        position="bottom-center"
      />
    </SessionProvider>
  );
}
