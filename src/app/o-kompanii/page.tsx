import AboutHero from '@/components/sections/about/main';
import History from '@/components/sections/about/history';
import Values from '@/components/sections/about/values';
import Team from '@/components/sections/about/team';
import Capacity from '@/components/sections/about/capacity';

export const metadata = {
  title: "Производитель моющих и дезинфицирующих средств ПроффХим",
  description: "Белорусский производитель профессиональной химии для предприятий. Собственное производство, современные технологии и контроль качества продукции.",
  alternates: {
    canonical: '/o-kompanii',
  },
  openGraph: {
    title: 'Производитель моющих и дезинфицирующих средств ПроффХим',
    description:
      'Белорусский производитель профессиональной химии для предприятий. Собственное производство, современные технологии и контроль качества продукции.',
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
    title: 'Производитель моющих и дезинфицирующих средств ПроффХим',
    description: 'Белорусский производитель профессиональной химии для предприятий. Собственное производство, современные технологии и контроль качества продукции.',
    images: ['/twitter-image.png'],
  },
};


export default function AboutPage() {
  const OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Общество с ограниченной ответственностью "ПроффХим"',
    alternateName: 'ПроффХим, Профф',
    url: 'https://proffhim.by',
    logo: 'https://proffhim.by/logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+375296729520',
        email: 'proffhimsale@mail.ru',
        contactType: 'sales',
        areaServed: ['BY', 'RU'],
        availableLanguage: 'Russian',
      },
    ],
    sameAs: [
      'https://www.instagram.com/proffhim.by/',
      'https://vk.com/public182349785',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'д. Подлипки, строение 7',
      addressLocality: 'Гродненский район, Одельский сельсовет',
      addressRegion: 'Гродненская область',
      postalCode: '231731',
      addressCountry: 'BY',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'BY',
      },
      {
        '@type': 'Country',
        name: 'RU',
      },
      {
        '@type': 'Country',
        name: 'KZ',
      },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(OrganizationSchema).replace(/</g, '\\u003c'),
        }}
      />
      <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
        <AboutHero />
        <History />
        <Values />
        <Team />
        <Capacity />
      </main>
    </>
  );
}
