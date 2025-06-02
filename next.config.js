/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
