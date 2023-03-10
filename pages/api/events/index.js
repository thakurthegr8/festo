import db from "@/src/services/db";
import Event from "@/src/services/db/models/Event";


const handler = db(async (req, res) => {
  if (req.method != "GET") return res.status(400).json("method not allowed");
  try {
    const getEvents = await Event.find({
      date: { $gte: new Date() },
    })
      .populate("group_ref", {
        name: 1,
        _id: 1,
      })
      .populate("type", {
        name: 1,
        _id: 1,
      });
    if (getEvents) {
      return res.status(200).json(getEvents);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default handler;
