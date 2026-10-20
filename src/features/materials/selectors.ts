import { MATERIALS, type Material, type MaterialFilter } from './config';

export const MATERIALS_PER_PAGE = 6;
export type MaterialsQuery = Record<string, string | string[] | undefined>;

export function getMaterialsHref(filter: MaterialFilter = 'all', page = 1) {
  const query = new URLSearchParams();
  if (filter !== 'all') query.set('type', filter);
  if (page > 1) query.set('page', String(page));
  return `/resheniya${query.size ? `?${query}` : ''}`;
}

export function getMaterialsPage(query: MaterialsQuery, materials: Material[] = MATERIALS) {
  const filter: MaterialFilter = ['solution', 'article', 'news'].includes(String(query.type))
    && typeof query.type === 'string' ? query.type as MaterialFilter : 'all';
  const filtered = materials.filter((material) => filter === 'all' || material.type === filter)
    .sort((a, b) => (a.sortOrder ?? Infinity) - (b.sortOrder ?? Infinity)
      || (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '') || a.id.localeCompare(b.id));
  const totalPages = Math.max(1, Math.ceil(filtered.length / MATERIALS_PER_PAGE));
  const requestedPage = typeof query.page === 'string' && /^\d+$/.test(query.page) ? Number(query.page) : 1;
  const page = Math.min(totalPages, Math.max(1, Number.isSafeInteger(requestedPage) ? requestedPage : 1));
  return {
    filter, page, totalPages, total: filtered.length,
    materials: filtered.slice((page - 1) * MATERIALS_PER_PAGE, page * MATERIALS_PER_PAGE),
  };
}

export function getPaginationItems(page: number, totalPages: number): (number | string)[] {
  const pages = [...new Set([1, page - 1, page, page + 1, totalPages])]
    .filter((number) => number >= 1 && number <= totalPages)
    .sort((a, b) => a - b);
  return pages.flatMap((number, index) => index > 0 && number - pages[index - 1] > 1
    ? [`gap-${number}`, number] : [number]);
}
