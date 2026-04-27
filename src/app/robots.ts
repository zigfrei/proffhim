import type { MetadataRoute } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(isProduction ? { allow: '/' } : { disallow: '/' }),
    },
    sitemap: 'https://proffhim.by/sitemap.xml',
  };
}
