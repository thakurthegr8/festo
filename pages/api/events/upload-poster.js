import { uploadFile } from "@/src/services/storage";

const handler = async (req, res) => {
  console.log(req.query);
  const file = new File(req.body, `event-${req.query.id}`);
  console.log(file);
  return res.status(200).json("file uploaded");
};

export default handler;
