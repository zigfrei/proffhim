import Hero from '@/components/sections/windows/main';
import Benefits from '@/components/sections/windows/benefits';
import Surfaces from '@/components/sections/windows/surfaces';
import BeforeAndAfter from '@/components/sections/windows/before-after';
import CTA from '@/components/sections/windows/cta';
import Wash from '@/components/sections/windows/wash';

export const metadata = {
  title: 'Средство для мытья мягких окон ПВХ | Профф SHKLO',
  description:
    'Профф SHKLO — средство для мытья мягких окон из ПВХ. Очищает веранды, террасы и беседки без разводов, снижает налипание пыли благодаря антистатику.',
  alternates: {
    canonical: '/sredstvo-dlya-myagkih-okon',
    types: {
      'text/markdown': '/markdown/sredstvo-dlya-myagkih-okon.md',
    },
  },
  openGraph: {
    title: 'Средство для мытья мягких окон ПВХ | Профф SHKLO',
    description:
      'Профф SHKLO — средство для мытья мягких окон из ПВХ. Очищает веранды, террасы и беседки без разводов, снижает налипание пыли благодаря антистатику.',
    url: 'https://proffhim.by/sredstvo-dlya-myagkih-okon',
    siteName: 'ПроффХим',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/og-image-window.png', 
        width: 1200,
        height: 630,
        alt: 'ПроффХим',
      },
    ],
  },
};

export default function Partners() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <Hero />
      <Benefits />
      <Surfaces />
      <BeforeAndAfter />
      <Wash />
      <CTA /> 
    </main>
  );
}
