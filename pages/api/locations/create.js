import db from "@/src/services/db";
import Category from "@/src/services/db/models/Category";
import Location from "@/src/services/db/models/Location";

const handler = db(async (req, res) => {
  if (req.method != "POST") return res.status(400).json("method not allowed");
  try {
    const createLocation = await Location.create(req.body);
    if (createLocation) {
      return res.status(201).json(createLocation);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default handler;
