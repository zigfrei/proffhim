import type { NextConfig } from 'next';
import { redirects } from './src/lib/redirects';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
