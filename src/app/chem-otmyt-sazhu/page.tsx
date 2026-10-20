import type { Metadata } from 'next';
import ArticleSchema from '@/components/structured-data/article-schema';
import SootArticle from '@/components/sections/soot/main';

const title = 'Чем отмыть сажу в бане, на кухне и после пожара';
const description = 'Как очистить сажу с дерева, кирпича, казана, стекла и пластика. Выбор средства по поверхности, применение «Профф В» и уборка после пожара.';
const url = '/chem-otmyt-sazhu';
const image = '/solutions-cards/soot.webp';

export const metadata: Metadata = {
  title: `${title} | ПроффХим`,
  description,
  alternates: {
    canonical: url,
    types: { 'text/markdown': '/markdown/chem-otmyt-sazhu.md' },
  },
  openGraph: {
    title,
    description,
    url,
    type: 'article',
    siteName: 'ПроффХим',
    locale: 'ru_RU',
    images: [{ url: image, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
};

export default function SootPage() {
  return (
    <main className='w-full pt-19 lg:pt-24'>
      <ArticleSchema title={title} description={description} url={url} image={image} />
      <SootArticle />
    </main>
  );
}
