import type { MetadataRoute } from 'next';

const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(allowIndexing ? { allow: '/' } : { disallow: '/' }),
    },
    sitemap: 'https://proffhim.by/sitemap.xml',
  };
}
