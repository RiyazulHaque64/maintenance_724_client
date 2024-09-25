/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "letsenhance.io",
      },
    ],
  },
};

module.exports = nextConfig;
