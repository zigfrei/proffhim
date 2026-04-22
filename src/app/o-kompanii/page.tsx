// import { Suspense } from 'react';
import AboutHero from '@/components/sections/about/main';
import History from '@/components/sections/about/history';
import Values from '@/components/sections/about/values';
import Team from '@/components/sections/about/team';
import Capacity from '@/components/sections/about/capacity';

export const metadata = {
  title: "О компании ПроффХим",
  description: "ООО «ПроффХим» — белорусский производитель профессиональной химии для предприятий. Собственное производство, современные технологии и контроль качества продукции.",
  openGraph: {
    title: 'О компании ПроффХим',
    description:
      'ООО «ПроффХим» — белорусский производитель профессиональной химии для предприятий. Собственное производство, современные технологии и контроль качества продукции.',
    url: 'https://proffhim.by/o-kompanii',
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
    title: 'О компании ПроффХим',
    description: 'ООО «ПроффХим» — белорусский производитель профессиональной химии для предприятий. Собственное производство, современные технологии и контроль качества продукции.',
    images: ['/twitter-image.png'],
  },
};


export default function AboutPage() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      {/* <Suspense fallback={null}> */}
        <AboutHero />
        <History />
        <Values />
        <Team />
        <Capacity />
      {/* </Suspense> */}
    </main>
  );
}