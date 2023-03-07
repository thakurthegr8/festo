import OktaProvider from "next-auth/providers/okta";

export default {
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
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log({ url, baseUrl }, "redirect");
      return url;
    },
    async session({ session, user, token }) {
      session.accessToken = token.accessToken;
      session.profile = token.profile;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token;
        token.profile = profile;
      }
      return token;
    },
  },
};
