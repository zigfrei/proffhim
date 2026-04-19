import { CATALOG_PRODUCTS } from '@/features/catalog/products/config';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import ProductMain from '@/components/sections/product/main';

type PageProps = { params: Promise<{ slug: string }> };

function getProductBySlug(slug: string) {
  return CATALOG_PRODUCTS.find((p) => p.slug === slug);
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
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
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <ProductMain product={product} />
    </main>
  );
}
