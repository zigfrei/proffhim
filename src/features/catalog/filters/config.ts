import { ProductType } from "../products/config";

export type CatalogFilterOption = {
  label: string;
  value: string;
};

export type CatalogFilterGroup = {
  key: string;
  title: string;
  options: CatalogFilterOption[];
};

export const CATALOG_FILTER_GROUPS: CatalogFilterGroup[] = [
  // {
  //   key: 'industry',
  //   title: 'Отрасль',
  //   options: [
  //     { label: 'Молочная отрасль', value: 'dairy' },
  //     { label: 'Пищевая отрасль', value: 'food' },
  //     { label: 'Пивоварение', value: 'brewing' },
  //     { label: 'Легкая промышленность', value: 'light-industry' },
  //     { label: 'Металлургия', value: 'metallurgy' },
  //   ],
  // },
  {
    key: 'product-type',
    title: 'Тип продукта',
    options: [
      { label: ProductType.ACID_CLEANERS, value: 'ACID_CLEANERS' },
      { label: ProductType.ALKALINE_AND_DISINFECTING, value: 'ALKALINE_AND_DISINFECTING' },
      { label: ProductType.MILD_ALKALINE_AND_NEUTRAL, value: 'MILD_ALKALINE_AND_NEUTRAL' },
      { label: ProductType.DISINFECTANTS, value: 'DISINFECTANTS' },
    ],
  },
];
