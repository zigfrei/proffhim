import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CatalogMain from '@/components/sections/catalog/main';
import {
  getCatalogFilterOptionBySlug,
  getProductTypeBySlug,
} from '@/features/catalog/filters';

type PageProps = {
  params: Promise<{ typeSlug: string }>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { typeSlug } = await props.params;
  const option = getCatalogFilterOptionBySlug(typeSlug);

  if (!option) {
    return {
      title: 'Категория не найдена | ПроффХим',
      description: 'Запрошенная категория продукции не найдена в каталоге ПроффХим.',
    };
  }

  return {
    title: `${option.label} | ПроффХим`,
    description: `Каталог продукции ПроффХим в категории «${option.label}».`,
  };
}

export default async function ProductTypePage(props: PageProps) {
  const { typeSlug } = await props.params;
  const selectedProductType = getProductTypeBySlug(typeSlug);

  if (!selectedProductType) {
    notFound();
  }

  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <Suspense fallback={null}>
        <CatalogMain
          selectedProductType={selectedProductType}
          selectedTypeSlug={typeSlug}
        />
      </Suspense>
    </main>
  );
}
