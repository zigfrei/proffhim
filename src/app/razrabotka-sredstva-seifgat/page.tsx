import SaifgatMain from '@/components/sections/seifgat/main';

export const metadata = {
  title: "Разработка средства «СейфГат» для кожевенной промышленности",
  description: "Научно обоснованная разработка отечественного антисептического средства «СейфГат» для обработки дубленого кожевенного полуфабриката, повышения качества шкур и снижения потерь сырья.",
  alternates: {
    canonical: '/razrabotka-sredstva-seifgat',
  },
  openGraph: {
    title: 'Разработка средства «СейфГат» для кожевенной промышленности',
    description:
      'Научно обоснованная разработка отечественного антисептического средства «СейфГат» для обработки дубленого кожевенного полуфабриката, повышения качества шкур и снижения потерь сырья.',
    url: 'https://proffhim.by/razrabotka-sredstva-seifgat',
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
    title: 'Разработка средства «СейфГат» для кожевенной промышленности',
    description: 'Научно обоснованная разработка отечественного антисептического средства «СейфГат» для обработки дубленого кожевенного полуфабриката, повышения качества шкур и снижения потерь сырья.',
    images: ['/twitter-image.png'],
  },
};


export default function Saifgat() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-19 lg:pt-24'>
      <SaifgatMain />
    </main>
  );
}
