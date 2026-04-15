import Hero from '@/components/sections/contacts/hero';
import Form from '@/components/sections/contacts/form';

export const metadata = {
  title: "Контакты | ПроффХим",
  description: "Контакты компании: адрес, телефон, email и форма обратной связи. Свяжитесь с нами для получения консультации, заказа продукции или сотрудничества.",
  openGraph: {
    title: 'Контакты | ПроффХим',
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
    title: 'Контакты | ПроффХим',
    description: 'Контакты компании: адрес, телефон, email и форма обратной связи. Свяжитесь с нами для получения консультации, заказа продукции или сотрудничества.',
    images: ['/twitter-image.png'],
  },
};


export default function Contacts() {
  return (
    <main className='flex flex-col items-center justify-center w-full scroll-mt-22 lg:scroll-mt-32'>
      <Hero />
      <Form />
    </main>
  );
}
