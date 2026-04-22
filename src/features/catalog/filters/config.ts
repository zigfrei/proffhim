import {
  ProductType,
  type ProductTypeKey,
} from '../products/config';

export type CatalogFilterOption = {
  label: string;
  value: ProductTypeKey;
  slug: string;
  description: string;
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
        description:
          'Кислотные моющие средства для удаления накипи и загрязнений с оборудования и поверхностей. Каталог продукции ПроффХим.',
      },
      {
        label: ProductType.ALKALINE_AND_DISINFECTING,
        value: 'ALKALINE_AND_DISINFECTING',
        slug: 'shchelochnye-moyushchie-i-dezinfitsiruyushchie-sredstva',
        description:
          'Щелочные моющие и дезинфицирующие средства для эффективной очистки и дезинфекции оборудования, инвентаря и поверхностей.',
      },
      {
        label: ProductType.MILD_ALKALINE_AND_NEUTRAL,
        value: 'MILD_ALKALINE_AND_NEUTRAL',
        slug: 'neitralnye-sredstva',
        description:
          'Нейтральные моющие средства для деликатной очистки оборудования и поверхностей. Подходят для различных отраслей.',
      },
      {
        label: ProductType.DISINFECTANTS,
        value: 'DISINFECTANTS',
        slug: 'dezinfitsiruyushchie-sredstva',
        description:
          'Дезинфицирующие средства для обработки оборудования, инвентаря и помещений. Каталог продукции ПроффХим.',
      },
    ],
  },
];

export const CATALOG_PRODUCT_TYPE_OPTIONS = CATALOG_FILTER_GROUPS[0].options;
