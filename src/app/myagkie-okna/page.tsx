import Hero from '@/components/sections/windows/main';
import Benefits from '@/components/sections/windows/benefits';
import Surfaces from '@/components/sections/windows/surfaces';
import BeforeAndAfter from '@/components/sections/windows/before-after';
import CTA from '@/components/sections/windows/cta';

export const metadata = {
  title: 'Средство для мягких окон Профф SHKLO с антистатическим эффектом',
  description:
    'Профф SHKLO для мягких окон — средство для очистки прозрачной ПВХ-плёнки, ПВХ-штор и гибкого стекла. Удаляет грязь и следы дождя, снижает налипание пыли, помогает дольше сохранить чистоту и прозрачность.',
  alternates: {
    canonical: '/myagkie-okna',
  },
  openGraph: {
    title: 'Средство для мягких окон Профф SHKLO с антистатическим эффектом',
    description:
      'Профф SHKLO для мягких окон — средство для очистки прозрачной ПВХ-плёнки, ПВХ-штор и гибкого стекла. Удаляет грязь и следы дождя, снижает налипание пыли, помогает дольше сохранить чистоту и прозрачность.',
    url: 'https://proffhim.by/myagkie-okna',
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
    title: 'Средство для мягких окон Профф SHKLO с антистатическим эффектом',
    description:
      'Профф SHKLO для мягких окон — средство для очистки прозрачной ПВХ-плёнки, ПВХ-штор и гибкого стекла. Удаляет грязь и следы дождя, снижает налипание пыли, помогает дольше сохранить чистоту и прозрачность.',
    images: ['/twitter-image.png'],
  },
};


export default function Partners() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <Hero />
      <Benefits />
      <Surfaces />
      <BeforeAndAfter />
      <CTA /> 
    </main>
  );
}
