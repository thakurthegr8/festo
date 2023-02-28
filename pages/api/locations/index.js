import db from "@/src/services/db";
import Location from "@/src/services/db/models/Location";

const handler = db(async (req, res) => {
  if (req.method != "GET") return res.status(400).json("method not allowed");
  try {
    const getLocations = await Location.find();
    if (getLocations) {
      return res.status(200).json(getLocations);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default handler;
