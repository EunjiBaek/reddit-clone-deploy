/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "www.gravatar.com",
      "localhost",
      "ec2-43-201-103-253.ap-northeast-2.compute.amazonaws.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
