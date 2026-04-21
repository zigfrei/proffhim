import type { Product, ProductTypeKey } from '@/features/catalog/products/config';
import {
  CATALOG_PRODUCT_TYPE_OPTIONS,
  type CatalogFilterOption,
} from './config';

const CATALOG_BASE_PATH = '/produktsiya';

export function getCatalogFilterOptionBySlug(slug: string) {
  return CATALOG_PRODUCT_TYPE_OPTIONS.find((option) => option.slug === slug);
}

export function getCatalogFilterOptionByProductType(
  productType: ProductTypeKey | null | undefined
) {
  if (!productType) return null;

  return (
    CATALOG_PRODUCT_TYPE_OPTIONS.find((option) => option.value === productType) ??
    null
  );
}

export function getProductTypeBySlug(slug: string): ProductTypeKey | null {
  return getCatalogFilterOptionBySlug(slug)?.value ?? null;
}

export function getProductTypeSlug(
  productType: ProductTypeKey | null | undefined
): string | null {
  if (!productType) return null;

  return (
    CATALOG_PRODUCT_TYPE_OPTIONS.find((option) => option.value === productType)
      ?.slug ?? null
  );
}

export function getCatalogHref(typeSlug?: string | null) {
  return typeSlug ? `${CATALOG_BASE_PATH}/${typeSlug}` : CATALOG_BASE_PATH;
}

export function getProductHref(product: Pick<Product, 'slug' | 'productType'>) {
  const typeSlug = getProductTypeSlug(product.productType);

  if (!typeSlug) {
    return `${CATALOG_BASE_PATH}/${product.slug}`;
  }

  return `${CATALOG_BASE_PATH}/${typeSlug}/${product.slug}`;
}

export function isProductInType(
  product: Pick<Product, 'productType'>,
  productType: ProductTypeKey | null
) {
  if (!productType) return true;

  return product.productType === productType;
}
