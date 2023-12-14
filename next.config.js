/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "tailwindui.com",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "http",
          hostname: "127.0.0.1",
        },
      ],
    },
  };

module.exports = nextConfig
