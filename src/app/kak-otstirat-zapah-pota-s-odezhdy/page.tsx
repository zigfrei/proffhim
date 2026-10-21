import type { Metadata } from 'next';
import ArticleSchema from '@/components/structured-data/article-schema';
import ProffitallArticle from '@/components/sections/proffitall/main';

const title = 'Как отстирать запах пота с одежды — 6 советов и PROFFITALL';
const description = 'Как избавиться от запаха спортивной одежды и отстирать запах пота с вещей: 6 советов по стирке и средство PROFFITALL «Антибактериальное».';
const url = '/kak-otstirat-zapah-pota-s-odezhdy';

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: url, types: { 'text/markdown': '/markdown/kak-otstirat-zapah-pota-s-odezhdy.md' } },
  openGraph: {
    title, description, url, type: 'article', siteName: 'ПроффХим', locale: 'ru_RU', publishedTime: '2026-10-21',
    images: [{ url: '/og-image-proffitall-anti.png', alt: 'PROFFITALL «Антибактериальное» — свежесть одежды после стирки' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image-proffitall-anti.png'] },
};

export default function ProffitallPage() {
  return (
    <main className='w-full min-w-0 pt-19 lg:pt-24'>
      <ArticleSchema title={title} description={description} url={url} image='/solutions-cards/proffitall-anti.webp' publishedAt='2026-10-21' />
      <ProffitallArticle />
    </main>
  );
}
