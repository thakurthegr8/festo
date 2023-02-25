import mongoose from "mongoose";

const db = (handler) => async (req, res) => {
  console.log(process.env);
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(
    `mongodb+srv://${process.env.NEXT_PUBLIC_MONGOUSERNAME}:${process.env.NEXT_PUBLIC_MONGOPASSWORD}@cluster0.93tbw3c.mongodb.net/?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  return handler(req, res);
};
export default db;
