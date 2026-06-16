import Hero from '@/components/sections/brewing-production/hero';
import Problem from '@/components/sections/brewing-production/problem';
import CTA from '@/components/sections/brewing-production/cta';
import Alkaline from '@/components/sections/brewing-production/alkaline';
import Acidic from '@/components/sections/brewing-production/acidic';
import Disinfection from '@/components/sections/brewing-production/disinfection';
import Neutral from '@/components/sections/brewing-production/neutral';
import Application from '@/components/sections/brewing-production/application';

export const metadata = {
  title:
    'Моющие средства для пивоваренной промышленности | ПроффХим',
  description:
    'Моющие средства для пивоваренной промышленности в Беларуси.',
  alternates: {
    canonical:
      '/moyushchie-sredstva-dlya-pivovarennoj-promyshlennosti',
  },
  openGraph: {
    title:
      'Моющие средства для пивоваренной промышленности | ПроффХим',
    description:
      'Моющие средства для пивоваренной промышленности в Беларуси.',
    url: 'https://proffhim.by/moyushchie-sredstva-dlya-pivovarennoj-promyshlennosti',
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
      'Моющие средства для пивоваренной промышленности | ПроффХим',
    description:
      'Моющие средства для пивоваренной промышленности в Беларуси.',
    images: ['/twitter-image.png'],
  },
};

export default function BrewingProduction() {

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
