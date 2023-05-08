const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["res.cloudinary.com"] },
  async redirects() {
    return [
      {
        source: "/orientation",
        destination: "/orientation/welcome",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
