import {
  ProductType,
  type ProductTypeKey,
} from '../products/config';

export type CatalogFilterOption = {
  label: string;
  value: ProductTypeKey;
  slug: string;
};

export type CatalogFilterGroup = {
  key: string;
  title: string;
  options: CatalogFilterOption[];
};

export const CATALOG_FILTER_GROUPS: CatalogFilterGroup[] = [
  {
    key: 'product-type',
    title: 'Тип продукта',
    options: [
      {
        label: ProductType.ACID_CLEANERS,
        value: 'ACID_CLEANERS',
        slug: 'kislotnye-moyushchie-sredstva',
      },
      {
        label: ProductType.ALKALINE_AND_DISINFECTING,
        value: 'ALKALINE_AND_DISINFECTING',
        slug: 'shchelochnye-moyushchie-i-dezinfitsiruyushchie-sredstva',
      },
      {
        label: ProductType.MILD_ALKALINE_AND_NEUTRAL,
        value: 'MILD_ALKALINE_AND_NEUTRAL',
        slug: 'neitralnye-sredstva',
      },
      {
        label: ProductType.DISINFECTANTS,
        value: 'DISINFECTANTS',
        slug: 'dezinfitsiruyushchie-sredstva',
      },
    ],
  },
];

export const CATALOG_PRODUCT_TYPE_OPTIONS = CATALOG_FILTER_GROUPS[0].options;
