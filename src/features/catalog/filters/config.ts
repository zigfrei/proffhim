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
  {
    key: 'industry',
    title: 'Отрасль',
    options: [
      { label: 'Молочная отрасль', value: 'dairy' },
      { label: 'Пищевая отрасль', value: 'food' },
      { label: 'Пивоварение', value: 'brewing' },
      { label: 'Легкая промышленность', value: 'light-industry' },
      { label: 'Металлургия', value: 'metallurgy' },
    ],
  },
{
    key: 'product-type',
    title: 'Тип продукта',
    options: [
      { label: 'Моющее средство', value: 'detergent' },
      { label: 'Активная пена', value: 'active-foam' },
      { label: 'Дезинфектант', value: 'disinfectant' },
    ],
  },
];
