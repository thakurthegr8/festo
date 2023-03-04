const { getToken } = require("next-auth/jwt");

const secret = process.env.NEXT_PUBLIC_OKTA_CLIENT_SECRET;

const withApiSession = (handler) => {
  return async (ctx) => {
    const { req } = ctx;
    const token = await getToken({ req, secret });
    if (token) {
      ctx.req.user = token.email;
      return handler(ctx);
    }
  };
};

export default withApiSession;
