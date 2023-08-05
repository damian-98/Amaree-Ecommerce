require("dotenv").config();

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const port = process.env.SERVER_PORT || 5005;

app.post("/checkout", async (req, res) => {
  // console.log(req.body);
  const cartItems = req.body.cartItems;
  let line_items = [];
  cartItems.forEach((item) => {
    line_items.push({
      price: item.id,
      quantity: item.quantity,
      adjustable_quantity: {
        enabled: true,
        maximum: 999,
      },
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
    automatic_tax: { enabled: true },
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(port, () => console.log(`Running on port ${port}`));
