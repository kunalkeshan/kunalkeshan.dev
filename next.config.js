/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/kunalkeshan/**'
      },
    ],
  },
};

module.exports = nextConfig;
