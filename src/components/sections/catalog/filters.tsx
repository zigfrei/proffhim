import clsx from 'clsx';
import Link from 'next/link';
import {
  CATALOG_FILTER_GROUPS,
  getCatalogHref,
} from '@/features/catalog/filters';

type CatalogFiltersProps = {
  selectedTypeSlug?: string | null;
};

export default function CatalogFilters({
  selectedTypeSlug,
}: CatalogFiltersProps) {
  const group = CATALOG_FILTER_GROUPS[0];

  return (
    <aside className='flex flex-col w-full items-start justify-center base-frame'>
      <h2 className='w-full text-center typo-h3 lg:typo-h45 xl:typo-h4 p-4 border-b-[2px] border-b-black'>
        Фильтры
      </h2>

      <div className='w-full flex flex-col items-start justify-start gap-2 p-4 border-b-[2px] border-b-black'>
        <h3 className='w-full typo-h45'>{group.title}</h3>

        <div
          role='radiogroup'
          aria-label={group.title}
          className='w-full flex flex-col items-start justify-start gap-1'
        >
          {group.options.map((item) => {
            const isActive = selectedTypeSlug === item.slug;
            const href = isActive ? getCatalogHref() : getCatalogHref(item.slug);

            return (
              <Link
                key={item.value}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className='w-full lg:border-b-2 p-2 lg:border-base-black last:border-b-0'
              >
                <span className='group flex items-start gap-2 cursor-pointer'>
                  <span
                    aria-hidden='true'
                    className={clsx(
                      'w-5 h-5 mt-[5px] lg:mt-[7px] shrink-0 border-[2px] border-base-black flex items-center justify-center bg-base-white transition-colors',
                      isActive && 'bg-primary'
                    )}
                  >
                    <span
                      className={clsx(
                        'w-2.5 h-2.5 rounded-full bg-base-black transition-opacity',
                        isActive ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </span>
                  <span className='typo-b2 uppercase font-bold'>{item.label}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
