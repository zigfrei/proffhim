import Hero from '@/components/sections/milk-production/hero';
import Problem from '@/components/sections/milk-production/problem';
import CTA from '@/components/sections/milk-production/cta';
import Alkaline from '@/components/sections/milk-production/alkaline';
import Acidic from '@/components/sections/milk-production/acidic';
import Disinfection from '@/components/sections/milk-production/disinfection';
import Neutral from '@/components/sections/milk-production/neutral';
import Application from '@/components/sections/milk-production/application';

export const metadata = {
  title:
    'Моющие средства для молочной промышленности | ПроффХим',
  description:
    'Моющие и дезинфицирующие средства для молочной промышленности: CIP-мойка, удаление молочного камня, жиров и белков, санитария оборудования.',
  alternates: {
    canonical:
      '/moyushchie-sredstva-dlya-molochnoj-promyshlennosti',
  },
  openGraph: {
    title:
      'Моющие средства для молочной промышленности | ПроффХим',
    description:
      'Моющие и дезинфицирующие средства для молочной промышленности: CIP-мойка, удаление молочного камня, жиров и белков, санитария оборудования.',
    url: 'https://proffhim.by/moyushchie-sredstva-dlya-molochnoj-promyshlennosti',
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
      'Моющие средства для молочной промышленности | ПроффХим',
    description:
      'Моющие и дезинфицирующие средства для молочной промышленности: CIP-мойка, удаление молочного камня, жиров и белков, санитария оборудования.',
    images: ['/twitter-image.png'],
  },
};

export default function MilkProduction() {

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
