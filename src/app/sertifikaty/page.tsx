import CertificateMain, { documents } from '@/components/sections/certificate/main';
import CertificateForm from '@/components/sections/certificate/form';

const SITE_URL = 'https://proffhim.by';

export const metadata = {
  title: 'Сертификаты и документы на продукцию ПроффХим',
  description:
    'Сертификаты и разрешительные документы на продукцию «ПроффХим». Подтверждение качества и соответствия требованиям для моющих и дезинфицирующих средств.',
  alternates: {
    canonical: '/sertifikaty',
  },
  openGraph: {
    title: 'Сертификаты и документы на продукцию ПроффХим',
    description:
      'Сертификаты и разрешительные документы на продукцию «ПроффХим». Подтверждение качества и соответствия требованиям для моющих и дезинфицирующих средств.',
    url: 'https://proffhim.by/sertifikaty',
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
    title: 'Сертификаты и документы на продукцию ПроффХим',
    description:
      'Сертификаты и разрешительные документы на продукцию «ПроффХим». Подтверждение качества и соответствия требованиям для моющих и дезинфицирующих средств.',
    images: ['/twitter-image.png'],
  },
};

export default function Certificates() {
  const certificatesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: documents.map((document, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: document.title,
      url: `${SITE_URL}/sertifikaty`,
    })),
  };

  const certificatesPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Сертификаты и документы на продукцию ПроффХим',
    description:
      'Сертификаты и разрешительные документы на продукцию «ПроффХим». Подтверждение качества и соответствия требованиям для моющих и дезинфицирующих средств.',
    url: `${SITE_URL}/sertifikaty`,
    mainEntity: certificatesItemListSchema,
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            certificatesPageSchema,
            certificatesItemListSchema,
          ]).replace(/</g, '\\u003c'),
        }}
      />
      <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
        <CertificateMain />
        <CertificateForm />
      </main>
    </>
  );
}
