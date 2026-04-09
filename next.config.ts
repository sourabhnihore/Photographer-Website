import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
      },
    ],
  },
  allowedDevOrigins: ["192.168.1.50", "localhost"],
};

export default nextConfig;
