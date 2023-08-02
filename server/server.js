require("dotenv").config();

const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const port = process.env.SERVER_PORT || 5005;
// const line_items = req.body.cartItems.map((item) => {
//   return {
//     price_data: {
//       currency: "usd",
//       product_data: {
//         name: item.name,
//         images: [item.images],
//       },

//       unit_amount: item.price * 100,
//     },
//     quantity: item.cartQuanity,

//     adjustable_quantity: {
//       enabled: true,
//       maximum: 999,
//     },
//   };
// });
app.get("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1NZi1KJgwVcyi1GTavyVuXo3",
        quantity: 1,
        adjustable_quantity: {
          enabled: true,
          maximum: 999,
        },
      },
      {
        price: "price_1NZib4JgwVcyi1GT6j4s9tgB",
        quantity: 1,
        adjustable_quantity: {
          enabled: true,
          maximum: 999,
        },
      },
      {
        price: "price_1NOATsJgwVcyi1GTKrIxLIVA",
        quantity: 1,
        adjustable_quantity: {
          enabled: true,
          maximum: 999,
        },
      },
    ],
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
    automatic_tax: { enabled: true },
  });

  res.redirect(303, session.url);
});

app.listen(port, () => console.log(`Running on port ${port}`));
