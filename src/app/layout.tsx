import type { Metadata } from 'next';
import { Unbounded, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ПроффХим',
  description:
    'Моющие средства для предприятий. Подробная информация о компании ПроффХим (Гродно): широкий выбор моющих, чистящих и дезинфицирующих средств, пищевых добавок, промышленной химии. Тип предприятия ООО ПроффХим: Производитель, Оптовый продавец',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'ПроффХим',
    description:
      'Моющие средства для предприятий. Широкий выбор моющих, чистящих и дезинфицирующих средств, пищевых добавок, промышленной химии.',
    url: 'https://proffhim.by',
    siteName: 'ПроффХим',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://proffhim.by/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ПроффХим',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ПроффХим',
    description: 'Моющие средства для предприятий.',
    images: ['https://proffhim.by/twitter-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml', rel: 'icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' className={`${unbounded.variable} antialiased`}>
      <body
        className={`${manrope.className} bg-main-background text-base-black flex flex-col items-center justify-center min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
