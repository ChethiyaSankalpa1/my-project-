/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes for email notifications
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove console logs in production for cleaner output
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
