module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['dev3027public.s3.amazonaws.com']
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
};
