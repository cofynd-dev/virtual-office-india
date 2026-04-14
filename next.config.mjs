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
      // City pages: new short URLs.
      {
        source: '/virtual-office/:city',
        destination: '/:city',
        permanent: true,
      },
      {
        source: '/virtual-office-in-:city',
        destination: '/:city',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;