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
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
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
