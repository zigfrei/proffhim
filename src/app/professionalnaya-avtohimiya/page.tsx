import Hero from '@/components/sections/cars-wash/hero';
import Problem from '@/components/sections/cars-wash/problem';
import CTA from '@/components/sections/cars-wash/cta';
import Active from '@/components/sections/cars-wash/active';
import Application from '@/components/sections/cars-wash/application';
import Engine from '@/components/sections/cars-wash/engine';
import Cargo from '@/components/sections/cars-wash/cargo';
import Disk from '@/components/sections/cars-wash/disk';

export const metadata = {
  title: 'Профессиональная автохимия для мойки автомобилей | ПроффХим',
  description:
    'Профессиональная автохимия: средства для бесконтактной мойки, мойки двигателя, очистки колесных дисков, тентов и прицепов.',
  alternates: {
    canonical: '/profissionalnaya-avtohimiya',
  },
  openGraph: {
    title: 'Профессиональная автохимия для мойки автомобилей | ПроффХим',
    description:
      'Профессиональная автохимия: средства для бесконтактной мойки, мойки двигателя, очистки колесных дисков, тентов и прицепов.',
    url: 'https://proffhim.by/professionalnaya-avtohimiya',
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
    title: 'Профессиональная автохимия для мойки автомобилей | ПроффХим',
    description:
      'Профессиональная автохимия: средства для бесконтактной мойки, мойки двигателя, очистки колесных дисков, тентов и прицепов.',
    images: ['/twitter-image.png'],
  },
};

export default function CarWash() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <Hero />
      <Problem />
      <Active />
      <Engine />
      <Cargo /> 
      <Disk />
  
      <Application />
      <CTA />
    </main>
  );
}
