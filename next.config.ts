import path from 'node:path';
import type { NextConfig } from 'next';
import { redirects } from './src/lib/redirects';

const nextConfig: NextConfig = {
  output: 'standalone',
  turbopack: {
    root: path.resolve(__dirname),
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
