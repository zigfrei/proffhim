import SectionBlock from '@/components/ui/section';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import Image from 'next/image';
import ProductDescription from './description';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FoamType } from '@/features/catalog/products/config';
import { Card } from '@/components/ui/card';
import { Product } from '@/features/catalog/products/config';
import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';
import { pickRandomProducts } from '@/features/cards/pick-random';

export default function ProductMain({ product }: { product: Product }) {
  const products: Product[] = pickRandomProducts(
    CATALOG_PRODUCTS.filter((item) => item.id !== product.id),
    4,
  );

  return (
    <SectionBlock wrapperClassName='px-0! lg:px-12!'>
      <div className='flex flex-col w-full items-start justify-center gap-4 lg:gap-8'>
        <Breadcrumbs
          className='px-4 lg:px-0'
          breadcrumbs={[
            { label: 'Каталог', href: '/produktsiya' },
            {
              label: product.name,
              href: `/produktsiya/${product.slug}`,
              active: true,
            },
          ]}
        />
        <div className='w-full flex flex-col items-start justify-start gap-4 px-4 lg:px-0'>
          <div className='w-full flex flex-col lg:flex-row items-stretch gap-4'>
            <div className='w-full aspect-square flex base-frame p-2'>
              <div className='w-full aspect-square shrink-0 border-2 border-base-black relative'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes='(min-width: 768px) 50vw, 100vw'
                  className='object-cover'
                />
              </div>
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-4'>
              <h2 className='typo-h2'>{product.name}</h2>
              <ProductDescription product={product} />
            </div>
          </div>

          <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-4'>
            {product.labelImage && (
              <Link
                href={product.labelImage}
                target='_blank'
                className='w-full max-w-[500px] lg:max-w-none flex items-center justify-center gap-2 typo-h5 base-frame lg:base-frame-interactive p-4 bg-primary'
              >
                <MagnifyingGlassIcon
                  className='h-6 w-6 [&>path]:stroke-[2]'
                  aria-hidden='true'
                />{' '}
                Увеличить этикетку
              </Link>
            )}
            {product.label && (
              <div className='w-full max-w-[500px] lg:max-w-none flex items-center justify-center gap-2 typo-h5 base-frame p-4'>
                {product.label}
              </div>
            )}
            {product.foamType && (
              <div className='w-full max-w-[500px] lg:max-w-none flex items-center justify-center gap-2 typo-h5 base-frame p-4'>
                Тип пены: {FoamType[product.foamType]}
              </div>
            )}
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-start gap-4'>
          <h2 className='typo-h2 px-4 lg:px-0'>Другие товары</h2>

          <ul className='px-4 lg:px-0 w-full grid grid-flow-col auto-cols-[minmax(280px,85%)] gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-4 lg:overflow-visible'>
            {products.map((product) => (
              <li key={product.id} className='card-wrapper'>
                <Card {...product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionBlock>
  );
}
