import axios from "axios";
import { getToken } from "next-auth/jwt";
import db from "@/src/services/db";
import Ticket from "@/src/services/db/models/Ticket";
import Event from "@/src/services/db/models/Event";

const secret = process.env.NEXT_PUBLIC_OKTA_CLIENT_SECRET;

const handler = db(async (req, res) => {
  if (req.method != "GET") return res.status(400).json("method not allowed");
  try {
    console.log(req.query.id);
    const session = await getToken({ req });
    if (session) console.log(session);
    // const getTicket = await Event.findById(req.query.id);
    if (session) return res.status(200).json(session);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default handler;
