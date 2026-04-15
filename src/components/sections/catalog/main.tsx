import SectionBlock from '@/components/ui/section';
import CatalogFilters from './filters';
import CatalogContent from './content';

export default function CatalogMain() {
  return (
    <SectionBlock>
      <div className='flex flex-col w-full items-start justify-center gap-4 lg:gap-8'>
        <h2 className='w-full text-left typo-h2 '>Продукция</h2>
        <div className='w-full grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-12'>
          <div className='lg:col-span-3'>
            <CatalogFilters />
          </div>
          <div className='lg:col-span-9'>
            <CatalogContent />
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
