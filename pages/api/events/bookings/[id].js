import db from "@/src/services/db";
import Ticket from "@/src/services/db/models/Ticket";

const handler = db(async (req, res) => {
  if (req.method != "POST") return res.status(400).json("method not allowed");
  try {
    const ticket = await Ticket.findOne({
      ticket_for_user: req.body.user,
      ticket_for_event: req.query.id,
    });
    return res.status(200).json(ticket);
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
});
export default handler;
