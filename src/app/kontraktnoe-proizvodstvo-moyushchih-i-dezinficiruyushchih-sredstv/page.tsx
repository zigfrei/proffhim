import Hero from '@/components/sections/b2b/hero';
import Production from '@/components/sections/b2b/production';
import Model from '@/components/sections/b2b/model';
import HowWeWork from '@/components/sections/b2b/work';
import FAQ from '@/components/sections/b2b/faq';
import WhyWe from '@/components/sections/b2b/why';
import CTA from '@/components/sections/b2b/cta';
import { faqItemsB2B } from '@/lib/faq';

export const metadata = {
  title:
    'Контрактное производство бытовой химии | ПроффХим',
  description:
    'Контрактное производство бытовой химии и дезсредств под вашим брендом: рецептуры, регистрация, выпуск от 5 тонн для клининга, HoReCa и дистрибьюторов.',
  alternates: {
    canonical:
      '/kontraktnoe-proizvodstvo-moyushchih-i-dezinficiruyushchih-sredstv',
  },
  openGraph: {
    title:
      'Контрактное производство бытовой химии | ПроффХим',
    description:
      'Контрактное производство бытовой химии и дезсредств под вашим брендом: рецептуры, регистрация, выпуск от 5 тонн для клининга, HoReCa и дистрибьюторов.',
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
      'Контрактное производство бытовой химии | ПроффХим',
    description:
      'Контрактное производство бытовой химии и дезсредств под вашим брендом: рецептуры, регистрация, выпуск от 5 тонн для клининга, HoReCa и дистрибьюторов.',
    images: ['/twitter-image.png'],
  },
};

export default function ContractManufacturing() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Контрактное производство моющих и дезинфицирующих средств',
    description:
      'Контрактное производство бытовой химии и дезсредств под вашим брендом. Разработка рецептур, регистрация, производство от 5 тонн. Работаем с клинингом, HoReCa и дистрибьюторами.',
    serviceType:
      'Контрактное производство моющих и дезинфицирующих средств под брендом (СТМ, Private Label)',
    provider: {
      '@type': 'Organization',
      name: 'ПроффХим',
      url: 'https://proffhim.by',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Беларусь',
      },
      {
        '@type': 'Country',
        name: 'Россия',
      },
      {
        '@type': 'Country',
        name: 'Казахстан',
      },
    ],
    url: 'https://proffhim.by/kontraktnoe-proizvodstvo-moyushchih-i-dezinficiruyushchih-sredstv',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItemsB2B.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema]).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />
      <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
        <Hero />
        <Production />
        <Model />
        <HowWeWork />
        <WhyWe />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
