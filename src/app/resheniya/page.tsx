import CollectionSchema from '@/components/structured-data/collection-schema';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import clsx from 'clsx';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import MaterialCard from '@/components/sections/solutions/material-card';
import SolutionsCTA from '@/components/sections/solutions/cta';
import { MATERIAL_FILTERS } from '@/features/materials/config';
import {
  MATERIALS_PER_PAGE,
  getMaterialsHref,
  getMaterialsPage,
  getPaginationItems,
  type MaterialsQuery,
} from '@/features/materials/selectors';

type Props = { searchParams: Promise<MaterialsQuery> };
const title = 'Наши решения, статьи и новости — ПроффХим';
const description =
  'Практические рекомендации, продукты и новости ПроффХим. Решения для чистоты и ухода, разработки моющих и дезинфицирующих средств.';

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const query = await searchParams;
  const { filter, page } = getMaterialsPage(query);
  const canonical = getMaterialsHref(filter, page);
  return {
    title,
    description,
    alternates: { canonical },
    ...(filter !== 'all' || page > 1
      ? {
          robots: {
            index: false,
            follow: process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true',
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      locale: 'ru_RU',
      siteName: 'ПроффХим',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/twitter-image.png'],
    },
  };
}

export default async function SolutionsPage({ searchParams }: Props) {
  const query = await searchParams;
  const { filter, page, totalPages, total, materials } =
    getMaterialsPage(query);
  // Нормализуем неизвестные фильтры, повторяющиеся параметры и страницы за пределами списка.
  if (
    (query.type !== undefined &&
      query.type !== (filter === 'all' ? undefined : filter)) ||
    (query.page !== undefined &&
      query.page !== (page === 1 ? undefined : String(page)))
  ) {
    redirect(getMaterialsHref(filter, page));
  }
  return (
    <main className='w-full pt-19 lg:pt-24'>
      <CollectionSchema
        title='Наши решения'
        description='Практические рекомендации, продукты и новости ПроффХим.'
        url={getMaterialsHref(filter, page)}
        items={materials}
        totalItems={total}
        offset={(page - 1) * MATERIALS_PER_PAGE}
      />
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 py-8 lg:gap-10 lg:px-12 lg:py-12'>
        <div className='flex flex-col gap-5'>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Главная', href: '/' },
              { label: 'Наши решения', href: '/resheniya', active: true },
            ]}
          />
          <h1 className='typo-h1'>Наши решения</h1>
          <p className='border-l-[5px] border-primary pl-4 typo-body'>
            Практические рекомендации, продукты и новости ПроффХим.
          </p>
        </div>
        <nav
          aria-label='Тип материала'
          className='grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4'
        >
          {MATERIAL_FILTERS.map(({ value, label }) => (
            <Link
              key={value}
              href={getMaterialsHref(value)}
              aria-current={filter === value ? 'page' : undefined}
              className={clsx(
                'flex min-h-14 items-center justify-center px-3 py-3 text-center typo-h5 base-frame focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-base-black',
                filter === value ? 'bg-primary' : 'hover:bg-primary',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        {materials.length ? (
          <div className='grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {materials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        ) : (
          <div className='border-2 border-base-black px-6 py-12 text-center typo-body'>
            {filter === 'news'
              ? 'Новости скоро появятся.'
              : filter === 'article'
                ? 'Статьи скоро появятся.'
                : 'Материалы скоро появятся.'}
          </div>
        )}
        {totalPages > 1 && (
          <nav
            aria-label='Страницы материалов'
            className='flex flex-wrap items-center justify-center gap-3'
          >
            {page > 1 && (
              <Link
                href={getMaterialsHref(filter, page - 1)}
                className='base-frame px-4 py-3 typo-h5 hover:bg-primary'
              >
                Назад
              </Link>
            )}
            {getPaginationItems(page, totalPages).map((item) =>
              typeof item === 'number' ? (
                <Link
                  key={item}
                  href={getMaterialsHref(filter, item)}
                  aria-label={`Страница ${item}`}
                  aria-current={page === item ? 'page' : undefined}
                  className={clsx(
                    'base-frame px-4 py-3 typo-h5 hover:bg-primary',
                    page === item && 'bg-primary',
                  )}
                >
                  {item}
                </Link>
              ) : (
                <span key={item} className='px-1' aria-hidden='true'>
                  …
                </span>
              ),
            )}
            {page < totalPages && (
              <Link
                href={getMaterialsHref(filter, page + 1)}
                className='base-frame px-4 py-3 typo-h5 hover:bg-primary'
              >
                Вперёд
              </Link>
            )}
          </nav>
        )}
        <SolutionsCTA />
      </div>
    </main>
  );
}
