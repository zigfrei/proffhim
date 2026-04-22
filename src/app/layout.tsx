import type { Metadata } from 'next';
import { Unbounded, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: 'Моющие и дезинфицирующие средства для оборудования и промышленности | ПроффХим',
  description:
    'Производство моющих и дезинфицирующих средств для оборудования, пищевой и агропромышленной отраслей. Щелочные, кислотные и пенные моющие средства для предприятий и ферм.',
  // remove this before prod !!!!!!!!!
    robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Моющие и дезинфицирующие средства для оборудования и промышленности | ПроффХим',
    description:
      'Производство моющих и дезинфицирующих средств для оборудования, пищевой и агропромышленной отраслей. Щелочные, кислотные и пенные моющие средства для предприятий и ферм.',
    url: 'https://proffhim.by',
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
    title: 'Моющие и дезинфицирующие средства для оборудования и промышленности | ПроффХим',
    description: 'Производство моющих и дезинфицирующих средств для оборудования, пищевой и агропромышленной отраслей. Щелочные, кислотные и пенные моющие средства для предприятий и ферм.',
    images: ['/twitter-image.png'],
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
