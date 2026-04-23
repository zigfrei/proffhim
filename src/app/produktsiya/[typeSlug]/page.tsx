import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CatalogMain from '@/components/sections/catalog/main';
import {
  CATALOG_PRODUCT_TYPE_OPTIONS,
  getCatalogFilterOptionBySlug,
  getProductTypeBySlug,
} from '@/features/catalog/filters';

const SITE_URL = 'https://proffhim.by';

type PageProps = {
  params: Promise<{ typeSlug: string }>;
};

export function generateStaticParams() {
  return CATALOG_PRODUCT_TYPE_OPTIONS.map(({ slug }) => ({
    typeSlug: slug,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { typeSlug } = await props.params;
  const option = getCatalogFilterOptionBySlug(typeSlug);

  if (!option) {
    return {
      title: 'Категория не найдена | ПроффХим',
      description: 'Запрошенная категория продукции не найдена в каталоге ПроффХим.',
      alternates: {
        canonical: `/produktsiya/${typeSlug}`,
      },
      openGraph: {
        title: 'Категория не найдена | ПроффХим',
        description:
          'Запрошенная категория продукции не найдена в каталоге ПроффХим.',
        url: `${SITE_URL}/produktsiya/${typeSlug}`,
        siteName: 'ПроффХим',
        locale: 'ru_RU',
        type: 'website',
        images: [
          {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'ПроффХим',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Категория не найдена | ПроффХим',
        description:
          'Запрошенная категория продукции не найдена в каталоге ПроффХим.',
        images: ['/twitter-image.png'],
      },
    };
  }

  return {
    title: `${option.label} | ПроффХим`,
    description: option.description,
    alternates: {
      canonical: `/produktsiya/${typeSlug}`,
    },
    openGraph: {
      title: `${option.label} | ПроффХим`,
      description: option.description,
      url: `${SITE_URL}/produktsiya/${typeSlug}`,
      siteName: 'ПроффХим',
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'ПроффХим',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${option.label} | ПроффХим`,
      description: option.description,
      images: ['/twitter-image.png'],
    },
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
      <CatalogMain
        selectedProductType={selectedProductType}
        selectedTypeSlug={typeSlug}
      />
    </main>
  );
}
