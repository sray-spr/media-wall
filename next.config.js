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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },



};

module.exports = nextConfig;
