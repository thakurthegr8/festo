import db from "@/src/services/db";
import Group from "@/src/services/db/models/Group";

const handler = db(async (req, res) => {
  if (req.method != "GET") return res.status(400).json("method not allowed");
  try {
    console.log(req.query);
    const getEvents = await Group.findById(req.query.id);
    if (getEvents) {
      return res.status(200).json(getEvents);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default handler;
