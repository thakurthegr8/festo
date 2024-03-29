import db from "@/src/services/db";
import errorMessages from "@/src/services/db/errorMessages";
import Category from "@/src/services/db/models/Category";

const handler = db(async (req, res) => {
  if (req.method != "POST") return res.status(400).json("method not allowed");
  try {
    const createCategories = await Category.create(req.body);
    if (createCategories) {
      return res.status(201).json(createCategories);
    }
  } catch (error) {
    return res.status(400).json(errorMessages[error.code]);
  }
});

export default handler;
