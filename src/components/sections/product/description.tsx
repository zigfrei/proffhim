'use client';

import { Product } from '@/features/catalog/products/config';
import clsx from 'clsx';
import { useState } from 'react';

export default function ProductDescription({ product }: { product: Product }) {
  const [currentTab, setCurrentTab] = useState('description');

  const onTabClick = (tab: string) => {
    setCurrentTab(tab);
  };

  const tabBaseClass =
    'flex-1 h-full flex items-center justify-center cursor-pointer max-[419px]:text-[1rem] typo-body uppercase font-bold px-1 transition-colors';

  return (
    <div className='w-full h-full flex flex-col items-stretch justify-start base-frame gap-2'>
      <div className='w-full h-16 flex items-stretch border-b-2 border-base-black'>
        {product.description && (
          <button
            onClick={() => onTabClick('description')}
            className={clsx(
              tabBaseClass,
              'border-r-2 border-base-black',
              currentTab === 'description'
                ? 'bg-base-black text-primary'
                : 'text-base-black',
            )}
          >
            Описание
          </button>
        )}

        {product.sanitationObjects && (
          <button
            onClick={() => onTabClick('sanitationObjects')}
            className={clsx(
              tabBaseClass,
              'border-r-2 border-base-black',
              currentTab === 'sanitationObjects'
                ? 'bg-base-black text-primary'
                : 'text-base-black',
            )}
          >
            Объекты мойки
          </button>
        )}

        {product.contaminationType && (
          <button
            onClick={() => onTabClick('contaminationType')}
            className={clsx(
              tabBaseClass,
              currentTab === 'contaminationType'
                ? 'bg-base-black text-primary'
                : 'text-base-black',
            )}
          >
            Загрязнения
          </button>
        )}
      </div>

      <div className='w-full flex-1 min-h-0 flex items-stretch justify-start p-4'>
        {currentTab === 'description' && (
          <p className='typo-body whitespace-pre-line'>{product.description}</p>
        )}
        {currentTab === 'sanitationObjects' && (
          <p className='typo-body whitespace-pre-line'>
            {product.sanitationObjects}
          </p>
        )}
        {currentTab === 'contaminationType' && (
          <p className='typo-body whitespace-pre-line'>
            {product.contaminationType}
          </p>
        )}
      </div>
    </div>
  );
}
