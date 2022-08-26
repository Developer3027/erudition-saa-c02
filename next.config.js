module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["dev3027public.s3.amazonaws.com", "lh3.googleusercontent.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
