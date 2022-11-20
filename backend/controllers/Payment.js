const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const User = require("../models/user");

exports.createPayment = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Domain Buy",
            },
            unit_amount: req.body.price,
          },
          quantity: 1,
        },
      ],
      customer: user.stripe_customer_id,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    res.json(session.url);
  } catch (err) {
    console.log(err);
  }
};
