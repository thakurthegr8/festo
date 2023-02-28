import db from "@/src/services/db";
import Group from "@/src/services/db/models/Group";

const handler = db(async (req, res) => {
  if (req.method != "POST") return res.status(400).json("method not allowed");
  try {
    const createGroup = await Group.create(req.body);
    if (createGroup) {
      return res.status(201).json(createGroup);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default handler;
