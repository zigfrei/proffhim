import { CATALOG_FILTER_GROUPS, type CatalogFilterGroup } from './config';

export type CatalogFilterState = Record<string, Set<string>>;

type SearchParamsLike = Pick<URLSearchParams, 'getAll' | 'toString'>;

function createInitialState(groups: CatalogFilterGroup[]) {
  const state: CatalogFilterState = {};

  for (const group of groups) {
    state[group.key] = new Set<string>();
  }

  return state;
}

export function parseFiltersFromSearchParams(
  searchParams: SearchParamsLike,
  groups: CatalogFilterGroup[] = CATALOG_FILTER_GROUPS
): CatalogFilterState {
  const state = createInitialState(groups);

  for (const group of groups) {
    const allowedValues = new Set(group.options.map((option) => option.value));
    const rawValues = searchParams
      .getAll(group.key)
      .flatMap((value) => value.split(','))
      .map((value) => value.trim())
      .filter(Boolean);

    for (const value of rawValues) {
      if (allowedValues.has(value)) {
        state[group.key].add(value);
      }
    }
  }

  return state;
}

export function buildSearchParamsFromFilters(
  searchParams: SearchParamsLike,
  selectedFilters: CatalogFilterState,
  groups: CatalogFilterGroup[] = CATALOG_FILTER_GROUPS
) {
  const params = new URLSearchParams(searchParams.toString());

  for (const group of groups) {
    params.delete(group.key);

    const selectedSet = selectedFilters[group.key] ?? new Set<string>();

    for (const option of group.options) {
      if (selectedSet.has(option.value)) {
        params.append(group.key, option.value);
      }
    }
  }

  return params;
}
