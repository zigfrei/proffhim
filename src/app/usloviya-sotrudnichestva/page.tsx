import DocumentManagement from '@/components/sections/terms-of-cooperation/document-management';
import Delivery from '@/components/sections/terms-of-cooperation/delivery';
import Finance from '@/components/sections/terms-of-cooperation/finance';
import Hero from '@/components/sections/terms-of-cooperation/main';
import Guarantees from '@/components/sections/terms-of-cooperation/guarantees';

export const metadata = {
  title: "Условия сотрудничества",
  description: "Условия сотрудничества с компанией ПроффХим: порядок работы, производство профессиональной химии, оформление заказа, оплата, доставка и поддержка клиентов.",
  alternates: {
    canonical: '/usloviya-sotrudnichestva',
  },
  openGraph: {
    title: 'Условия сотрудничества',
    description:
      'Условия сотрудничества с компанией ПроффХим: порядок работы, производство профессиональной химии, оформление заказа, оплата, доставка и поддержка клиентов.',
    url: 'https://proffhim.by/usloviya-sotrudnichestva',
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
    title: 'Условия сотрудничества',
    description: 'Условия сотрудничества с компанией ПроффХим: порядок работы, производство профессиональной химии, оформление заказа, оплата, доставка и поддержка клиентов.',
    images: ['/twitter-image.png'],
  },
};


export default function Saifgat() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <Hero />
      <Finance />
      <DocumentManagement />
      <Delivery />
      <Guarantees />
    </main>
  );
}
