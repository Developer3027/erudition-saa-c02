/* eslint-disable import/no-anonymous-default-export */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { item, email } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item
          },
          unit_amount: 5000,
        },
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/`,
    metadata: {
      email
    },
  });

  res.status(200).json({id: session.id});

};