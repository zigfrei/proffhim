import { Product } from '@/features/catalog/products/config';

export default function ProductDescription({ product }: { product: Product }) {
  const sections = [
    {
      key: 'description',
      title: 'Описание',
      content: product.description,
    },
    {
      key: 'sanitationObjects',
      title: 'Объекты мойки',
      content: product.sanitationObjects,
    },
    {
      key: 'contaminationType',
      title: 'Загрязнения',
      content: product.contaminationType,
    },
  ].filter((section) => section.content);

  return (
    <div className='w-full h-full flex flex-col items-stretch justify-start base-frame'>
      {sections.map((section, index) => (
        <section
          key={section.key}
          className='w-full flex flex-col items-stretch justify-start'
        >
          <h3 className='typo-body uppercase font-bold p-2 border-b-2 border-base-black'>
            {section.title}
          </h3>
          <div
            className={`p-2 ${index < sections.length - 1 ? 'border-b-2 border-base-black' : ''}`}
          >
            <p className='typo-b2 whitespace-pre-line'>{section.content}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
