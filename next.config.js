/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'secure.gravatar.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '80',
        pathname: '/wordpress/wp-content/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
