import Hero from '@/components/sections/bread-production/hero';
import Problem from '@/components/sections/bread-production/problem';
import CTA from '@/components/sections/bread-production/cta';
import Alkaline from '@/components/sections/bread-production/alkaline';
import Acidic from '@/components/sections/bread-production/acidic';
import Disinfection from '@/components/sections/bread-production/disinfection';
import Neutral from '@/components/sections/bread-production/neutral';
import Application from '@/components/sections/bread-production/application';

export const metadata = {
  title:
    'Моющие средства для пекарен и кондитерских производств | ПроффХим',
  description:
    'Моющие средства для пекарен и производства кондитерских изделий в Беларуси.',
  alternates: {
    canonical:
      '/moyushchie-sredstva-dlya-hlebobulochnoj-i-konditerskoj-promyshlennosti',
  },
  openGraph: {
    title:
      'Моющие средства для пекарен и кондитерских производств | ПроффХим',
    description:
      'Моющие средства для пекарен и производства кондитерских изделий в Беларуси.',
    url: 'https://proffhim.by/moyushchie-sredstva-dlya-hlebobulochnoj-i-konditerskoj-promyshlennosti',
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
    title:
      'Моющие средства для пекарен и кондитерских производств | ПроффХим',
    description:
      'Моющие средства для пекарен и производства кондитерских изделий в Беларуси.',
    images: ['/twitter-image.png'],
  },
};

export default function BreadProduction() {

  return (
      <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
        <Hero />
        <Problem />
        <Alkaline />
        <Acidic />
        <Disinfection />
        <Neutral />
        <Application />
        <CTA />
      </main>
  );
}
