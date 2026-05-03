import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductMain from '@/components/sections/product/main';
import {
  getCatalogFilterOptionByProductType,
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

function getAbsoluteImageUrl(image: string) {
  return image.startsWith('/') ? `${SITE_URL}${image}` : image;
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
  }).filter((params): params is { typeSlug: string; slug: string } =>
    Boolean(params),
  );
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
      alternates: {
        canonical: `/produktsiya/${typeSlug}/${slug}`,
      },
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
    product.seoDescription ??
    product.description ??
    `Карточка товара ${product.name} в каталоге ПроффХим.`;
  const image = getAbsoluteImageUrl(product.image);

  return {
    title: `${product.seoName ?? product.name} | ПроффХим`,
    description,
    alternates: {
      canonical: `/produktsiya/${typeSlug}/${slug}`,
    },
    openGraph: {
      title: `${product.seoName ?? product.name} | ПроффХим`,
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
          alt: product.seoName ?? product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.seoName ?? product.name} | ПроффХим`,
      description,
      images: [image],
    },
  };
}

export default async function ProductPage(props: PageProps) {
  const { typeSlug, slug } = await props.params;
  const selectedProductType = getProductTypeBySlug(typeSlug);
  const product = getProductBySlug(slug);
  const pageUrl = `${SITE_URL}/produktsiya/${typeSlug}/${slug}`;

  if (
    !selectedProductType ||
    !product ||
    !isProductInType(product, selectedProductType)
  ) {
    notFound();
  }

  const productTypeOption =
    getCatalogFilterOptionByProductType(selectedProductType);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.seoName ?? product.name,
    description:
      product.description ??
      `Карточка товара ${product.name} в каталоге ПроффХим.`,
    image: getAbsoluteImageUrl(product.image),
    url: pageUrl,
    brand: {
      '@type': 'Brand',
      name: 'ПроффХим',
    },
    category: productTypeOption?.label,
    offers: {
      '@type': 'Offer',
      url: pageUrl,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BYN',
    },
  };

  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, '\\u003c'),
        }}
      />
      <ProductMain product={product} />
    </main>
  );
}
