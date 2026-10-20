export const MATERIAL_TYPES = {
  solution: 'Решение',
  article: 'Статья',
  news: 'Новость',
} as const;

export type MaterialType = keyof typeof MATERIAL_TYPES;
export type MaterialFilter = MaterialType | 'all';

export interface Material {
  id: string;
  type: MaterialType;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  publishedAt?: string;
  sortOrder?: number;
  featuredOrder?: number;
}

// Добавляйте здесь карточки опубликованных материалов. Их страницы могут иметь любой URL.
export const MATERIALS: Material[] = [
  {
    id: 'soot',
    type: 'article',
    title: 'Чем отмыть сажу в бане, на кухне и после пожара',
    description: 'Как очистить дерево, кирпич, посуду и стекло от сажи: выбираем средство с учётом поверхности и загрязнения.',
    href: '/chem-otmyt-sazhu',
    image: '/solutions-cards/soot.webp',
    imageAlt: 'Очистка поверхности от сажи и нагара',
    sortOrder: 3,
  },
  {
    id: 'soft-windows',
    type: 'solution',
    title: 'Средство для мягких окон',
    description: 'Уход за ПВХ-шторами и гибким стеклом: чистота без разводов и защита от налипания пыли.',
    href: '/sredstvo-dlya-myagkih-okon',
    image: '/solutions-cards/windows.webp',
    imageAlt: 'Мягкие окна в беседке',
    sortOrder: 1,
  },
  {
    id: 'seifgat',
    type: 'article',
    title: 'Разработка средства «СейфГат»',
    description: 'Антисептическое средство для защиты кожевенного полуфабриката от биоповреждений при хранении.',
    href: '/razrabotka-sredstva-seifgat',
    image: '/solutions-cards/safegat.webp',
    imageAlt: 'Производство ПроффХим',
    sortOrder: 2,
  },
];

export const MATERIAL_FILTERS: { value: MaterialFilter; label: string }[] = [
  { value: 'all', label: 'Все материалы' },
  { value: 'solution', label: 'Решения' },
  { value: 'article', label: 'Статьи' },
  { value: 'news', label: 'Новости' },
];
