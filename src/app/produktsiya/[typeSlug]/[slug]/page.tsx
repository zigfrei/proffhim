import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductMain from '@/components/sections/product/main';
import { getProductTypeBySlug, isProductInType } from '@/features/catalog/filters';
import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';

type PageProps = {
  params: Promise<{ typeSlug: string; slug: string }>;
};

function getProductBySlug(slug: string) {
  return CATALOG_PRODUCTS.find((product) => product.slug === slug);
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { typeSlug, slug } = await props.params;
  const selectedProductType = getProductTypeBySlug(typeSlug);
  const product = getProductBySlug(slug);

  if (
    !selectedProductType ||
    !product ||
    !isProductInType(product, selectedProductType)
  ) {
    return {
      title: 'Товар не найден | ПроффХим',
      description: 'Запрошенный товар не найден в каталоге ПроффХим.',
    };
  }

  return {
    title: `${product.name} | ПроффХим`,
    description:
      product.description ??
      `Карточка товара ${product.name} в каталоге ПроффХим.`,
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
