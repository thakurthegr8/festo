import OktaProvider from "next-auth/providers/okta";

const auth = {
  providers: [
    OktaProvider({
      clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_OKTA_CLIENT_SECRET,
      issuer: process.env.NEXT_PUBLIC_OKTA_ISSUER,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXT_PUBLIC_OKTA_CLIENT_SECRET,
  },
  callbacks: {
    async signIn(cred) {
      console.log(cred);
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log({ url, baseUrl }, "redirect");
      return url;
    },
    async session({ session, user, token }) {
      session.accessToken = token.accessToken;
      session.profile = token.profile;
      console.log(session);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(user);
      if (account) {
        token.accessToken = account.access_token;
        token.profile = profile;
      }
      return token;
    },
  },
};

export default auth;
