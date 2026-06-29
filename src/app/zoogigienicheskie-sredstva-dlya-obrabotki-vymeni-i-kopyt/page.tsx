import Hero from '@/components/sections/zoo-production/hero';
import Problem from '@/components/sections/zoo-production/problem';
import CTA from '@/components/sections/zoo-production/cta';
import Before from '@/components/sections/zoo-production/before';
import After from '@/components/sections/zoo-production/after';
import Bath from '@/components/sections/zoo-production/bath';
import Application from '@/components/sections/zoo-production/application';

export const metadata = {
  title: 'Зоогигиенические средства для вымени и копыт | ПроффХим',
  description:
    'Средства для обработки вымени до и после доения и растворы для копытных ванн. Профилактика мастита и заболеваний копыт, защита здоровья стада.',
  alternates: {
    canonical: '/zoogigienicheskie-sredstva-dlya-obrabotki-vymeni-i-kopyt',
  },
  openGraph: {
    title: 'Зоогигиенические средства для вымени и копыт | ПроффХим',
    description:
      'Средства для обработки вымени до и после доения и растворы для копытных ванн. Профилактика мастита и заболеваний копыт, защита здоровья стада.',
    url: 'https://proffhim.by/zoogigienicheskie-sredstva-dlya-obrabotki-vymeni-i-kopyt',
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
    title: 'Зоогигиенические средства для вымени и копыт | ПроффХим',
    description:
      'Средства для обработки вымени до и после доения и растворы для копытных ванн. Профилактика мастита и заболеваний копыт, защита здоровья стада.',
    images: ['/twitter-image.png'],
  },
};

export default function ZooProduction() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <Hero />
      <Problem />
      <Before />
      <After />
      <Bath />
      <Application />
      <CTA />
    </main>
  );
}
