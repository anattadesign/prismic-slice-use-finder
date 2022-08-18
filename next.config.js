/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.accentuate.io',
      'cdn.shopify.com'
    ]
  }
};

module.exports = nextConfig;
