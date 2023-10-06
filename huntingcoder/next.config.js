/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: {
    export: true
  },
  trailingSlash: true,
};

module.exports = nextConfig;
