import SectionBlock from '@/components/ui/section';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Product } from '@/features/catalog/products/config';
import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';
import { pickRandomProducts } from '@/features/cards/pick-random';

export default async function NotFound() {
  const products: Product[] = pickRandomProducts(CATALOG_PRODUCTS, 4);
  return (
    <SectionBlock wrapperClassName='px-0! lg:px-12!'>
      <div className='flex flex-col w-full items-start justify-center gap-4 lg:gap-8'>
        <Breadcrumbs
          className='px-4 lg:px-0'
          breadcrumbs={[
            { label: 'Каталог', href: '/products' },
            {
              label: `Товар не найден`,
              href: `/products/unknown`,
              active: true,
            },
          ]}
        />
        <div className='w-full flex flex-col items-start justify-start gap-4 px-4 lg:px-0'>
          <div className='w-full flex flex-col lg:flex-row items-stretch gap-4'>
            <div className='w-full aspect-square flex base-frame p-2'>
              <div className='w-full flex items-center justify-center aspect-square shrink-0 border-2 border-base-black bg-secondary'>
                <p className='typo-h1 text-center'>404</p>
              </div>
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-4'>
              <h2 className='typo-h2'>Товар не найден</h2>
              <div className='w-full h-full typo-body flex flex-col items-stretch justify-start base-frame p-4 gap-2'>
                Запрошенный товар не найден в каталоге ПроффХим. Возможно, он
                был удалён или перемещён. Пожалуйста, проверьте URL или
                вернитесь в каталог товаров.
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-4'>
            <Link
              href='/products'
              className='w-full max-w-[500px] lg:max-w-none flex items-center justify-center gap-2 typo-h5 base-frame lg:base-frame-interactive p-4 bg-primary'
            >
              В каталог товаров
            </Link>
            <Link
              href='/'
              className='w-full max-w-[500px] lg:max-w-none flex items-center justify-center gap-2 typo-h5 base-frame lg:base-frame-interactive p-4'
            >
              На главную страницу
            </Link>
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
