import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';
import { Card, Product } from '@/components/ui/card';

const products: Product[] = [
  {
    id: '1',
    name: 'Профф марки ВА',
    description:
      'Предназначено для пенной и непенной мойки и дезинфекции внешней поверхности различных видов технологического оборудования, инвентаря, тары, полов, стен с использованием пеногенераторов, аппаратов высокого давления или ручным способом.',
    image: '/products/va.png',
    link: '/products/va',
  },
  {
    id: '2',
    name: 'Профф В',
    description:
      'Щелочное моющее средство для удаления смолистых загрязнений, нагара, следов от копчения с поверхностей газовых и электроплит, конвектоматов, грилей, облицовочной плитки, посуды.',
    image: '/products/v.png',
    link: '/products/v',
  },
  {
    id: '3',
    name: 'Профф БАРЬЕР',
    description:
      'Предназначено для дезинфекции помещений, различных поверхностей, оборудования, стен, полов; автотранспорта, въезжающего на территорию пищевых предприятий через дезбарьеры; обуви персонала и посетителей.',
    image: '/products/barier.png',
    link: '/products/barier',
  },
  {
    id: '4',
    name: 'Профф АКТИВ',
    description:
      'Слабощелочное пенное моющее средство с высокой степенью обезжиривания. Предназначено для бесконтактной и ручной мойки различных поверхностей, оборудования на предприятиях пищевой и не пищевой отраслей промышленности, объектах агропромышленного комплекса; для мытья транспорта.',
    image: '/products/active.png',
    link: '/products/active',
  },
];

export default function Cards() {
  return (
    <SectionBlock wrapperClassName="px-0! lg:px-12!" >
      <div className='flex w-full flex-col items-start justify-center gap-4 lg:gap-8'>
        <h2 className='typo-h2 px-4 lg:px-0'>Продукция</h2>

        <div className='px-4 lg:px-0 w-full grid grid-flow-col auto-cols-[minmax(280px,85%)] gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-4 lg:overflow-visible'>
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>

        <BigLinkButton href='/#' className='self-center'>
          Смотреть весь каталог
        </BigLinkButton>
      </div>
    </SectionBlock>
  );
}
