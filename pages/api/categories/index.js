import db from "@/src/services/db";
import Category from "@/src/services/db/models/Category";

const handler = db(async (req, res) => {
  if (req.method != "GET") return res.status(400).json("method not allowed");
  try {
    const getCategories = await Category.find();
    if (getCategories) {
      return res.status(200).json(getCategories);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default handler;
