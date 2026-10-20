import JsonLd from './json-ld';
import { absoluteUrl, PUBLISHER } from './shared';

export interface ArticleSchemaProps {
  type?: 'Article' | 'BlogPosting' | 'NewsArticle';
  title: string;
  description: string;
  url: string;
  image?: string;
  /** Реальные даты публикации и обновления в ISO 8601. */
  publishedAt?: string;
  modifiedAt?: string;
  author?: { type: 'Person' | 'Organization'; name: string; url?: string };
}

/** Для промоматериалов и статей — Article, для новостей — type="NewsArticle". */
export default function ArticleSchema({
  type = 'Article',
  title,
  description,
  url,
  image,
  publishedAt,
  modifiedAt,
  author,
}: ArticleSchemaProps) {
  const pageUrl = absoluteUrl(url);
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': type,
        '@id': `${pageUrl}#article`,
        url: pageUrl,
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        headline: title,
        description,
        inLanguage: 'ru',
        ...(image ? { image: [absoluteUrl(image)] } : {}),
        ...(publishedAt ? { datePublished: publishedAt } : {}),
        ...(modifiedAt ? { dateModified: modifiedAt } : {}),
        ...(author
          ? {
              author: {
                '@type': author.type,
                name: author.name,
                ...(author.url ? { url: absoluteUrl(author.url) } : {}),
              },
            }
          : {}),
        publisher: PUBLISHER,
        isPartOf: {
          '@type': 'CollectionPage',
          '@id': absoluteUrl('/resheniya'),
        },
      }}
    />
  );
}
