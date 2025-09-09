import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable additional React warnings in development
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
    ],
  },
};

export default nextConfig;
