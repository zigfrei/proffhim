import CatalogMain from '@/components/sections/catalog/main';

export const metadata = {
  title: 'Продукция ПроффХим — моющие и дезинфицирующие средства',
  description:
    'Каталог моющих и дезинфицирующих средств: щелочные, кислотные, пенные и беспенные, для мойки и дезинфекции оборудования, инвентаря и производственных помещений.',
  alternates: {
    canonical: '/produktsiya',
  },
  openGraph: {
    title: 'Продукция ПроффХим — моющие и дезинфицирующие средства',
    description:
      'Каталог моющих и дезинфицирующих средств: щелочные, кислотные, пенные и беспенные, для мойки и дезинфекции оборудования, инвентаря и производственных помещений.',
    url: 'https://proffhim.by/produktsiya',
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
    title: 'Продукция ПроффХим — моющие и дезинфицирующие средства',
    description:
      'Каталог моющих и дезинфицирующих средств: щелочные, кислотные, пенные и беспенные, для мойки и дезинфекции оборудования, инвентаря и производственных помещений.',
    images: ['/twitter-image.png'],
  },
};

export default function ProductsPage() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <CatalogMain />
    </main>
  );
}
