'use client';

import { useCallback, type ChangeEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Checkbox from '@/components/ui/checkbox';
import {
  buildSearchParamsFromFilters,
  CATALOG_FILTER_GROUPS,
  parseFiltersFromSearchParams,
  type CatalogFilterState,
} from '@/features/catalog/filters';

export default function CatalogFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedFilters = parseFiltersFromSearchParams(searchParams);

  const updateUrl = useCallback(
    (nextSelected: CatalogFilterState) => {
      const params = buildSearchParamsFromFilters(searchParams, nextSelected);
      const query = params.toString();

      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const handleFilterChange = useCallback(
    (
      filterKey: string,
      value: string,
      payload: boolean | ChangeEvent<HTMLInputElement>
    ) => {
      const checked =
        typeof payload === 'boolean' ? payload : payload.target.checked;

      const nextSelected: CatalogFilterState = Object.fromEntries(
        Object.entries(selectedFilters).map(([key, values]) => [
          key,
          new Set(values),
        ])
      );

      const nextValues = nextSelected[filterKey] ?? new Set<string>();
      nextSelected[filterKey] = nextValues;

      if (checked) {
        nextValues.add(value);
      } else {
        nextValues.delete(value);
      }

      updateUrl(nextSelected);
    },
    [selectedFilters, updateUrl]
  );

  return (
    <aside className='flex flex-col w-full items-start justify-center base-frame'>
      <h2 className='w-full text-center typo-h4 p-4 border-b-[2px] border-b-black'>
        Фильтры
      </h2>

      {CATALOG_FILTER_GROUPS.map((group) => (
        <div
          key={group.key}
          className='w-full flex flex-col items-start justify-start gap-2 p-4 border-b-[2px] border-b-black'
        >
          <h3 className='w-full typo-h45'>{group.title}</h3>

          <div className='w-full flex flex-col items-start justify-start gap-1'>
            {group.options.map((item) => (
              <Checkbox
                key={item.value}
                label={item.label}
                className='w-full lg:border-b-2 p-2 lg:border-base-black last:border-b-0'
                checked={selectedFilters[group.key]?.has(item.value) ?? false}
                onChange={(payload: boolean | ChangeEvent<HTMLInputElement>) =>
                  handleFilterChange(group.key, item.value, payload)
                }
              />
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}