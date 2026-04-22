import type { MetadataRoute } from 'next';
import { CATALOG_PRODUCT_TYPE_OPTIONS, getProductHref } from '@/features/catalog/filters';
import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';

const SITE_URL = 'https://proffhim.by';

const STATIC_PAGES = [
  '',
  '/kontakty',
  '/kontraktnoe-proizvodstvo-moyushchih-i-dezinficiruyushchih-sredstv',
  '/o-kompanii',
  '/politika-konfidencialnosti',
  '/produktsiya',
  '/sertifikaty',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));

  const productTypePages: MetadataRoute.Sitemap = CATALOG_PRODUCT_TYPE_OPTIONS.map(
    ({ slug }) => ({
      url: `${SITE_URL}/produktsiya/${slug}`,
      lastModified,
    })
  );

  const productPages: MetadataRoute.Sitemap = CATALOG_PRODUCTS.map((product) => {
    const hasPublicImage =
      typeof product.image === 'string' && product.image.startsWith('/');

    return {
      url: `${SITE_URL}${getProductHref(product)}`,
      lastModified,
      ...(hasPublicImage ? { images: [`${SITE_URL}${product.image}`] } : {}),
    };
  });

  return [...staticPages, ...productTypePages, ...productPages];
}
