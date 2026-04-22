import type { ProductTypeKey } from '@/features/catalog/products/config';
import SectionBlock from '@/components/ui/section';
import CatalogFilters from './filters';
import CatalogContent from './content';

type CatalogMainProps = {
  selectedProductType?: ProductTypeKey | null;
  selectedTypeSlug?: string | null;
};

export default function CatalogMain({
  selectedProductType = null,
  selectedTypeSlug = null,
}: CatalogMainProps) {
  return (
    <SectionBlock>
      <div className='flex flex-col w-full items-start justify-center gap-4 lg:gap-8'>
        <h1 className='w-full text-[2rem] lg:text-[3rem] text-left typo-h2 '>Моющие и дезинфици&shy;рующие средства</h1>
        <div className='w-full grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-12'>
          <div className='lg:col-span-3'>
            <CatalogFilters selectedTypeSlug={selectedTypeSlug} />
          </div>
          <div className='lg:col-span-9'>
            <CatalogContent selectedProductType={selectedProductType} />
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
