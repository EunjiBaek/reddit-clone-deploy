/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "www.gravatar.com",
      "localhost",
      "ec2-3-34-181-205.ap-northeast-2.compute.amazonaws.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
