import type { ProductTypeKey } from './config';

export function filterByProductType<T extends { productType?: ProductTypeKey }>(
  items: T[],
  selectedProductType: ProductTypeKey | null
) {
  if (!selectedProductType) return items;

  return items.filter((item) => item.productType === selectedProductType);
}

export function paginate<T>(items: T[], page: number, pageSize: number) {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(safePage, totalPages);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return {
    total,
    totalPages,
    currentPage,
    pageItems: items.slice(start, end),
  };
}
