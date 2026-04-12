// import { Suspense } from 'react';
import AboutHero from '@/components/sections/about/main';
import History from '@/components/sections/about/history';
import Values from '@/components/sections/about/values';
import Team from '@/components/sections/about/team';
import Capacity from '@/components/sections/about/capacity';

export const metadata = {
  title: "О компании | ПроффХим",
  description: "О компании «ПроффХим»: белорусский производитель средств «Профф», команда профессионалов с европейскими стандартами качества и экологичным подходом.",
  openGraph: {
    title: 'О компании | ПроффХим',
    description:
      'О компании «ПроффХим»: белорусский производитель средств «Профф», команда профессионалов с европейскими стандартами качества и экологичным подходом.',
    url: 'https://proffhim.by/about',
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
    title: 'О компании | ПроффХим',
    description: 'О компании «ПроффХим»: белорусский производитель средств «Профф», команда профессионалов с европейскими стандартами качества и экологичным подходом.',
    images: ['/twitter-image.png'],
  },
};


export default function AboutPage() {
  return (
    <main className='flex flex-col items-center justify-center w-full'>
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