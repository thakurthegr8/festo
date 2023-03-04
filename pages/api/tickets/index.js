import db from "@/src/services/db";
import Ticket from "@/src/services/db/models/Ticket";

const handler = db(async (req, res) => {
  if (req.method != "POST") return res.status(400).json("method not allowed");
  try {
    const ticket = await Ticket.find({
      ticket_for_user: req.body.user,
    }).populate("ticket_for_event");
    return res.status(200).json(ticket);
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
});
export default handler;
