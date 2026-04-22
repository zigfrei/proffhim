import CertificateMain from '@/components/sections/certificate/main';
import CertificateForm from '@/components/sections/certificate/form';

export const metadata = {
  title: 'Сертификаты и документы на продукцию ПроффХим',
  description:
    'Сертификаты и разрешительные документы на продукцию «ПроффХим». Подтверждение качества и соответствия требованиям для моющих и дезинфицирующих средств.',
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
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <CertificateMain />
      <CertificateForm />
    </main>
  );
}
