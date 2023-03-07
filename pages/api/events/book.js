import db from "@/src/services/db";
import Ticket from "@/src/services/db/models/Ticket";

const handler = db(async (req, res) => {
  if (req.method != "POST") return res.status(400).json("method not allowed");
  try {
    const bookEvent = await Ticket.create(req.body);
    if (bookEvent) {
      return res.status(201).json(bookEvent);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default handler;
