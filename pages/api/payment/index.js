import Razorpay from "razorpay";
import shortid from "shortid";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json("method not allowed");
  // Initialize razorpay object
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_PAYMENT_KEY,
    key_secret: process.env.NEXT_PUBLIC_PAYMENT_SECRET,
  });

  // Create an order -> generate the OrderID -> Send it to the Front-end
  // Also, check the amount and currency on the backend (Security measure)
  const payment_capture = 1;
  const amount = 499;
  const currency = "INR";
  const options = {
    amount: Number(req.body.amount) * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
