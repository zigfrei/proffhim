import SectionBlock from '@/components/ui/section';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Product } from '@/features/catalog/products/config';
import Image from 'next/image';
import ProductDescription from './description';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FoamType } from "@/features/catalog/products/config";

export default function ProductMain({ product }: { product: Product }) {
  return (
    <SectionBlock>
      <div className='flex flex-col w-full items-start justify-center gap-4 lg:gap-8'>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Каталог', href: '/products' },
            {
              label: product.name,
              href: `/products/${product.slug}`,
              active: true,
            },
          ]}
        />
        <div className='w-full flex flex-col items-start justify-start gap-4'>
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
            <Link href={product.labelImage} target='_blank' className='w-full max-w-[500px] lg:max-w-none flex items-center justify-center gap-2 typo-h5 base-frame lg:base-frame-interactive p-4 bg-primary'>
              <MagnifyingGlassIcon className="h-6 w-6 [&>path]:stroke-[2]" aria-hidden="true" /> Увеличить этикетку
            </Link>
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
      </div>
    </SectionBlock>
  );
}
