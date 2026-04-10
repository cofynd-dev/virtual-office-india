import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  // Deployment safety: do not ignore type/lint errors.
  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      {
        source: '/homepage',
        destination: '/',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/virtual-office-in-:city",
        destination: "/virtual-office/:city",
      },
    ];
  },
};
export default nextConfig;