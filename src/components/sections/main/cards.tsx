import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';
import { Card } from '@/components/ui/card';
import { Product } from '@/features/catalog/products/config';
import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';

const products: Product[] = [
  CATALOG_PRODUCTS[0],
  CATALOG_PRODUCTS[4],
  CATALOG_PRODUCTS[9],
  CATALOG_PRODUCTS[14],
];

export default function Cards() {
  return (
    <SectionBlock wrapperClassName='px-0! lg:px-12!'>
      <div className='flex w-full flex-col items-start justify-center gap-4 lg:gap-8'>
        <h2 className='typo-h2 px-4 lg:px-0'>Продукция</h2>

        <ul className='px-4 lg:px-0 w-full grid grid-flow-col auto-cols-[minmax(280px,85%)] gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-4 lg:overflow-visible'>
          {products.map((product) => (
            <li key={product.id} className='card-wrapper'>
              <Card {...product} />
            </li>
          ))}
        </ul>

        <BigLinkButton href='/products' className='self-center'>
          Смотреть весь каталог
        </BigLinkButton>
      </div>
    </SectionBlock>
  );
}
