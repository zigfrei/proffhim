'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';
import {
  filterByProductType,
  paginate,
} from '@/features/catalog/products/selectors';
import CatalogPagination from '@/components/ui/pagination';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'motion/react';
import type { ProductTypeKey } from '@/features/catalog/products/config';

const PAGE_SIZE = 6;

type CatalogContentProps = {
  selectedProductType?: ProductTypeKey | null;
};

export default function CatalogContent({
  selectedProductType = null,
}: CatalogContentProps) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page') ?? '1');
  const listKey = searchParams.toString() || `page-${page}`;

  const filtered = useMemo(
    () => filterByProductType(CATALOG_PRODUCTS, selectedProductType),
    [selectedProductType],
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
          {pageItems.map((product) => {
            const {
              productType,
              foamType,
              sanitationObjects,
              contaminationType,
              labelImage,
              ...cardProps
            } = product;

            return (
              <li key={product.id} className='card-wrapper'>
                <Card {...cardProps} productType={product.productType} />
              </li>
            );
          })}
        </motion.ul>
      </AnimatePresence>
      <CatalogPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
