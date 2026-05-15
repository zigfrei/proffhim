import { BigLinkButton } from '@/components/ui/links';
import type { Metadata } from 'next';
import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';
import { Card } from '@/components/ui/card';
import { Product } from '@/features/catalog/products/config';
import SectionBlock from '@/components/ui/section';

const products: Product[] = [
  CATALOG_PRODUCTS[2],
  CATALOG_PRODUCTS[6],
  CATALOG_PRODUCTS[15],
  CATALOG_PRODUCTS[9],
];

export const metadata: Metadata = {
  title: 'Страница не найдена | ПроффХим',
  description:
    'Запрошенная страница не найдена. Перейдите на главную страницу или в каталог продукции ПроффХим.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className='flex w-full'>
      <SectionBlock wrapperClassName='px-0! lg:px-12! pt-19! lg:pt-24!'>
        <div className='flex w-full flex-col items-center justify-center gap-4 text-center px-4'>
          <h1 className='typo-h1 pt-4 lg:pt-8'>404</h1>
          <p className='typo-h3 max-w-[1360px]'>
            Страница не найдена или адрес введён неверно.
          </p>
          <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6'>
            <BigLinkButton
              href='/'
              className='lg:mt-4 lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center'
            >
              на главную
            </BigLinkButton>

            <BigLinkButton
              href='/produktsiya'
              className='lg:mt-4 lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center'
            >
              в каталог
            </BigLinkButton>
          </div>
          <ul className='max-w-[1100px] lg:px-0 w-full grid grid-flow-col auto-cols-[minmax(280px,85%)] gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-4 lg:overflow-visible'>
            {products.map((product) => {
              const {
                productType,
                foamType,
                sanitationObjects,
                contaminationType,
                labelImage,
                description,
                ...cardProps
              } = product;

              return (
                <li key={product.id} className='card-wrapper'>
                  <Card {...cardProps} productType={product.productType} />
                </li>
              );
            })}
          </ul>
        </div>
      </SectionBlock>
    </main>
  );
}
