import db from "@/src/services/db";
import Event from "@/src/services/db/models/Event";

const handler = db(async (req, res) => {
  if (req.method != "GET") return res.status(400).json("method not allowed");
  try {
    console.log(req.query);
    const getEvents = await Event.findById(req.query.id).populate([
      "location",
      "group_ref",
      "type"
    ]);
    if (getEvents) {
      return res.status(200).json(getEvents);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default handler;
