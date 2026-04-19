import PolicyMain from '@/components/sections/policy/main';

export const metadata = {
  title: "Политика обработки персональных данных | ПроффХим",
  description: "ПОЛИТИКА В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ",
  openGraph: {
    title: 'Политика обработки персональных данных | ПроффХим',
    description:
      'ПОЛИТИКА В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ',
    url: 'https://proffhim.by/politika-konfidencialnosti',
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
    title: 'Политика обработки персональных данных | ПроффХим',
    description: 'ПОЛИТИКА В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ',
    images: ['/twitter-image.png'],
  },
};


export default function Policy() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <PolicyMain />
    </main>
  );
}
