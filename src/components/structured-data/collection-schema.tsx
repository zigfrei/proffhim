import JsonLd from './json-ld';
import { absoluteUrl, PUBLISHER } from './shared';

interface CollectionItem {
  title: string;
  description: string;
  href: string;
  image?: string;
}

interface CollectionSchemaProps {
  title: string;
  description: string;
  url: string;
  items: CollectionItem[];
  /** Число материалов во всей отфильтрованной подборке. */
  totalItems?: number;
  /** Смещение позиций при пагинации. В items передаются только видимые карточки. */
  offset?: number;
}

export default function CollectionSchema({
  title, description, url, items, totalItems = items.length, offset = 0,
}: CollectionSchemaProps) {
  const pageUrl = absoluteUrl(url);
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': pageUrl,
      url: pageUrl,
      name: title,
      description,
      inLanguage: 'ru',
      publisher: PUBLISHER,
      mainEntity: {
        '@type': 'ItemList',
        '@id': `${pageUrl}#materials`,
        numberOfItems: totalItems,
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: offset + index + 1,
          item: {
            '@type': 'WebPage',
            '@id': absoluteUrl(item.href),
            url: absoluteUrl(item.href),
            name: item.title,
            description: item.description,
            ...(item.image ? { image: absoluteUrl(item.image) } : {}),
          },
        })),
      },
    }} />
  );
}
