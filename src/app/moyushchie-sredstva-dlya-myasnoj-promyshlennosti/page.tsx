import Hero from '@/components/sections/meat-production/hero';
import Problem from '@/components/sections/meat-production/problem';
import CTA from '@/components/sections/meat-production/cta';
import Alkaline from '@/components/sections/meat-production/alkaline';
import Acidic from '@/components/sections/meat-production/acidic';
import Disinfection from '@/components/sections/meat-production/disinfection';
import Neutral from '@/components/sections/meat-production/neutral';
import Application from '@/components/sections/meat-production/application';

export const metadata = {
  title:
    'Моющие средства для мясокомбинатов и рыбопереработки | ПроффХим',
  description:
    'Моющие средства для мясной промышленности и рыбопереработки в Беларуси.',
  alternates: {
    canonical:
      '/moyushchie-sredstva-dlya-myasnoj-promyshlennosti',
  },
  openGraph: {
    title:
      'Моющие средства для мясокомбинатов и рыбопереработки | ПроффХим',
    description:
      'Моющие средства для мясной промышленности и рыбопереработки в Беларуси.',
    url: 'https://proffhim.by/moyushchie-sredstva-dlya-myasnoj-promyshlennosti',
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
      'Моющие средства для мясокомбинатов и рыбопереработки | ПроффХим',
    description:
      'Моющие средства для мясной промышленности и рыбопереработки в Беларуси: CIP-мойка, удаление молочного камня, жиров и белков, санитария оборудования.',
    images: ['/twitter-image.png'],
  },
};

export default function MeatProduction() {

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
