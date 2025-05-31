import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/wall",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
