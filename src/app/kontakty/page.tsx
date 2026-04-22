import Hero from '@/components/sections/contacts/hero';
import Form from '@/components/sections/contacts/form';

export const metadata = {
  title: 'Контакты компании «ПроффХим»',
  description:
    'Контакты компании: адрес, телефон, email и форма обратной связи. Свяжитесь с нами для получения консультации, заказа продукции или сотрудничества.',
  openGraph: {
    title: 'Контакты компании «ПроффХим»',
    description:
      'Контакты компании: адрес, телефон, email и форма обратной связи. Свяжитесь с нами для получения консультации, заказа продукции или сотрудничества.',
    url: 'https://proffhim.by/kontakty',
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
    title: 'Контакты компании «ПроффХим»',
    description:
      'Контакты компании: адрес, телефон, email и форма обратной связи. Свяжитесь с нами для получения консультации, заказа продукции или сотрудничества.',
    images: ['/twitter-image.png'],
  },
};

const productionBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Общество с ограниченной ответственностью "ПроффХим"',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'д. Подлипки, строение 7',
    addressLocality: 'Гродненский район, Одельский сельсовет',
    addressRegion: 'Гродненская область',
    postalCode: '231731',
    addressCountry: 'BY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.488607',
    longitude: '23.709074',
  },
  telephone: '+375296729520',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:30',
    closes: '18:00',
  },
  email: 'proffhimsale@mail.ru',

  url: 'https://proffhim.by/kontakty',
  image: 'https://proffhim.by/og-image.png',
  areaServed: [
    {
      '@type': 'Country',
      name: 'BY',
    },
    {
      '@type': 'Country',
      name: 'RU',
    },
  ],
  vatID: '591506904',
  taxID: '591506904',
  description:
    'Производство моющих и дезинфицирующих средств. Поставки по Беларуси и России.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+375-29-672-95-20',
      email: 'proffhimsale@mail.ru',
      contactType: 'customer support',
      areaServed: ['BY', 'RU'],
      availableLanguage: 'Russian',
    },
  ],
};

export default function Contacts() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productionBusinessSchema).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />
      <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
        <Hero />
        <Form />
      </main>
    </>
  );
}
