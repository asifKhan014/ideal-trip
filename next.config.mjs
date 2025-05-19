/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '7216',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Frontend requests starting with /api
        destination: 'http://localhost:7216/api/:path*', // Redirecting to backend
      },
    ];
  },
};

export default nextConfig;
