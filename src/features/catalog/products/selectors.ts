import type { CatalogFilterState } from '@/features/catalog/filters';

type Accessors<T> = Record<string, (item: T) => string | string[] | undefined>;

export function filterBySelected<T>(
  items: T[],
  selected: CatalogFilterState,
  accessors: Accessors<T>
) {
  return items.filter((item) => {
    return Object.entries(selected).every(([filterKey, selectedValues]) => {
      if (!selectedValues || selectedValues.size === 0) return true;

      const accessor = accessors[filterKey];
      if (!accessor) return true;

      const raw = accessor(item);
      if (!raw) return false;

      if (Array.isArray(raw)) {
        return raw.some((v) => selectedValues.has(v));
      }

      return selectedValues.has(raw);
    });
  });
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