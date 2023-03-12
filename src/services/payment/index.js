import axios from "axios";

const razorPayScriptSrc = "https://checkout.razorpay.com/v1/checkout.js";

const initializeRazorPay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = razorPayScriptSrc;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const makePayment = async (params, handler) => {
  const res = await initializeRazorPay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  // Make API call to the serverless API
  const paymentRes = await axios.post("/api/payment", {
    amount: params.amount,
  });
  const paymentData = await paymentRes.data;

  const options = {
    key: process.env.NEXT_PUBLIC_PAYMENT_KEY,
    name: params.merchant,
    currency: paymentData.currency,
    amount: paymentData.amount,
    order_id: paymentData.id,
    description: "Thankyou for your test donation",
    image: params.image,
    handler: function (response) {
      handler(response);
    },
    prefill: {
      name: params.merchant,
      email: "rt040371@gmail.com",
      contact: "7906247741",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  console.log(paymentObject);
};
