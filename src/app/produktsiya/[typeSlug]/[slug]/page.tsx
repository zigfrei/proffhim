import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductMain from '@/components/sections/product/main';
import {
  getProductTypeBySlug,
  getProductTypeSlug,
  isProductInType,
} from '@/features/catalog/filters';
import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';

const SITE_URL = 'https://proffhim.by';

type PageProps = {
  params: Promise<{ typeSlug: string; slug: string }>;
};

function getProductBySlug(slug: string) {
  return CATALOG_PRODUCTS.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return CATALOG_PRODUCTS.map((product) => {
    const typeSlug = getProductTypeSlug(product.productType);

    if (!typeSlug) {
      return null;
    }

    return {
      typeSlug,
      slug: product.slug,
    };
  }).filter((params): params is { typeSlug: string; slug: string } => Boolean(params));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { typeSlug, slug } = await props.params;
  const selectedProductType = getProductTypeBySlug(typeSlug);
  const product = getProductBySlug(slug);
  const pageUrl = `${SITE_URL}/produktsiya/${typeSlug}/${slug}`;

  if (
    !selectedProductType ||
    !product ||
    !isProductInType(product, selectedProductType)
  ) {
    return {
      title: 'Товар не найден | ПроффХим',
      description: 'Запрошенный товар не найден в каталоге ПроффХим.',
      openGraph: {
        title: 'Товар не найден | ПроффХим',
        description: 'Запрошенный товар не найден в каталоге ПроффХим.',
        url: pageUrl,
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
        title: 'Товар не найден | ПроффХим',
        description: 'Запрошенный товар не найден в каталоге ПроффХим.',
        images: ['/twitter-image.png'],
      },
    };
  }

  const description =
    product.description ??
    `Карточка товара ${product.name} в каталоге ПроффХим.`;
  const image = typeof product.image === 'string' && product.image.startsWith('/')
    ? `${SITE_URL}${product.image}`
    : '/og-image.png';

  return {
    title: `${product.name} | ПроффХим`,
    description,
    openGraph: {
      title: `${product.name} | ПроффХим`,
      description,
      url: pageUrl,
      siteName: 'ПроффХим',
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | ПроффХим`,
      description,
      images: [image],
    },
  };
}

export default async function ProductPage(props: PageProps) {
  const { typeSlug, slug } = await props.params;
  const selectedProductType = getProductTypeBySlug(typeSlug);
  const product = getProductBySlug(slug);

  if (
    !selectedProductType ||
    !product ||
    !isProductInType(product, selectedProductType)
  ) {
    notFound();
  }

  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <ProductMain product={product} />
    </main>
  );
}
