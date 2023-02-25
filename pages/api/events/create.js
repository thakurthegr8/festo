import db from "@/src/services/db";
import Event from "@/src/services/db/models/Event";

const handler = db(async (req, res) => {
  if (req.method != "POST") return res.status(400).json("method not allowed");
  try {
    const createEvent = await Event.create(req.body);
    if (createEvent) {
      return res.status(201).json(createEvent);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
  return res.status(201).json(req.body);
});

export default handler;
