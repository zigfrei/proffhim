import CertificateMain from '@/components/sections/certificate/main';
import CertificateForm from '@/components/sections/certificate/form';
import CTA from '@/components/sections/main/cta';

export const metadata = {
  title: 'Документы и сертификаты | ПроффХим',
  description:
    'Сертификаты и документы для моющих и дезинфицирующих средств компании ПроффХим: актуальные разрешительные и сопроводительные документы на продукцию.',
  openGraph: {
    title: 'Документы и сертификаты | ПроффХим',
    description:
      'Сертификаты и документы для моющих и дезинфицирующих средств компании ПроффХим: актуальные разрешительные и сопроводительные документы на продукцию.',
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
    title: 'Документы и сертификаты | ПроффХим',
    description:
      'Сертификаты и документы для моющих и дезинфицирующих средств компании ПроффХим: актуальные разрешительные и сопроводительные документы на продукцию.',
    images: ['/twitter-image.png'],
  },
};

export default function Certificates() {
  return (
    <main className='flex flex-col items-center justify-center w-full scroll-mt-22 lg:scroll-mt-32'>
      <CertificateMain />
      <CertificateForm />
      {/* <CTA /> */}
    </main>
  );
}
