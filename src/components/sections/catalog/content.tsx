'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { parseFiltersFromSearchParams } from '@/features/catalog/filters';
import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';
import {
  filterBySelected,
  paginate,
} from '@/features/catalog/products/selectors';
import CatalogPagination from '@/components/ui/pagination';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'motion/react';

const PAGE_SIZE = 6;

export default function CatalogContent() {
  const searchParams = useSearchParams();
  const selected = parseFiltersFromSearchParams(searchParams);
  const page = Number(searchParams.get('page') ?? '1');
  const listKey = searchParams.toString() || `page-${page}`;

  const filtered = useMemo(
    () =>
      filterBySelected(CATALOG_PRODUCTS, selected, {
        industry: (p) => p.industry,
        'product-type': (p) => p.productType,
        // purpose: (p) => p.purpose, // просто добавишь новую группу и accessor
      }),
    [selected],
  );

  const { pageItems, totalPages, currentPage } = useMemo(
    () => paginate(filtered, page, PAGE_SIZE),
    [filtered, page],
  );

  return (
    <div className='flex flex-col gap-4 lg:gap-8'>
      <AnimatePresence mode='wait' initial={false}>
        <motion.ul
          key={listKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='grid grid-cols-1 lg:grid-cols-3 gap-4 auto-cols-[minmax(280px,85%)]'
        >
          {pageItems.map((item) => (
            <li key={item.id} className='card-wrapper'>
              <Card {...item} />
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
      <CatalogPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
