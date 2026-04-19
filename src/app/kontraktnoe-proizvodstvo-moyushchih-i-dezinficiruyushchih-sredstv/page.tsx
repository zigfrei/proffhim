import Hero from '@/components/sections/b2b/hero';
import Production from '@/components/sections/b2b/production';
import Model from '@/components/sections/b2b/model';
import HowWeWork from '@/components/sections/b2b/work';
import FAQ from '@/components/sections/b2b/faq';

export const metadata = {
  title:
    'Контрактное производство моющих и дезинфицирующих средств под брендом (СТМ, Private Label) | ПроффХим',
  description:
    'Контрактное производство бытовой химии и дезсредств под вашим брендом. Разработка рецептур, регистрация, производство от 200 кг. Работаем с клинингом, HoReCa и дистрибьюторами.',
  openGraph: {
    title:
      'Контрактное производство моющих и дезинфицирующих средств под брендом (СТМ, Private Label) | ПроффХим',
    description:
      'Контрактное производство бытовой химии и дезсредств под вашим брендом. Разработка рецептур, регистрация, производство от 200 кг. Работаем с клинингом, HoReCa и дистрибьюторами.',
    url: 'https://proffhim.by/kontraktnoe-proizvodstvo-moyushchih-i-dezinficiruyushchih-sredstv',
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
      'Контрактное производство моющих и дезинфицирующих средств под брендом (СТМ, Private Label) | ПроффХим',
    description:
      'Контрактное производство бытовой химии и дезсредств под вашим брендом. Разработка рецептур, регистрация, производство от 200 кг. Работаем с клинингом, HoReCa и дистрибьюторами.',
    images: ['/twitter-image.png'],
  },
};

export default function ContractManufacturing() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <Hero />
      <Production />
      <Model />
      <HowWeWork />
      <FAQ />
    </main>
  );
}
