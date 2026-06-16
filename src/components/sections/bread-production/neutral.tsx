import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Neutral() {
  return (
    <SectionBlock wrapperClassName='py-8!'>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8'>
        <div className='w-full flex-col lg:flex-row-reverse flex items-stretch justify-stretch'>
          <div className='w-full flex items-center lg:items-start flex-col gap-4 p-4'>
            <Link href='/produktsiya/neitralnye-sredstva'>
              <h2 className='w-full typo-h2'>Нейтральные средства</h2>
            </Link>
            <h3 className='w-full typo-h4 text-center lg:text-left base-frame p-4 bg-primary'>
              Мягкая мойка деликатных поверхностей
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Универсальные средства для регулярной мойки там, где важен щадящий
              режим и высокая степень обезжиривания
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - мягкая очистка без повреждения чувствительных материалов и
                    покрытий
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - эффективное обезжиривание посуды, полов, стен и
                    оборудования
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - отсутствие коррозии металлов и вредных компонентов, лёгкое
                    смывание с поверхности
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - посуда, тара, инвентарь и элементы оборудования
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - полы, стены и прочие моющиеся поверхности в цехах и
                    вспомогательных помещениях
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - деликатные материалы: полимерные покрытия, ламинат,
                    паркет, дерево, цветные металлы
                  </li>
                </ul>
              </div>
            </div>
            <LinkButton
              href='/produktsiya/neitralnye-sredstva/proff-eco'
              className='group flex items-center justify-center gap-2 hidden lg:inline-flex mt-auto w-full'
            >
              Подробнее
              <ArrowRightIcon className='h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1 [&>path]:stroke-[2]' />
            </LinkButton>
          </div>
          <div className='w-full flex flex-col items-start gap-4 p-4'>
            <div className='w-full aspect-square flex flex-col base-frame p-2'>
              <h3 className='typo-body uppercase font-bold p-2'>
                Наше решение:
              </h3>
              <div className='w-full flex flex-col gap-4'>
                <div className='w-full aspect-square shrink-0 border-2 border-base-black relative'>
                  <Image
                    src='/products/eco.png'
                    alt='Средство моющее Профф марки ЭКО'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство моющее Профф марки ЭКО
                  </h3>
                  <p className='typo-b3'>
                    Универсальное нейтральное моющее средство с высокой степенью
                    обезжиривания. Предназначено для мытья посуды, полов, стен и
                    других поверхностей. Рекомендуется для поверхностей,
                    неустойчивых к щелочи и кислоте (полимерные покрытия,
                    ламинат, паркет, дерево, мрамор, гранит, покрытия из цветных
                    металлов, изделия из кожи). Не содержит вредных веществ, не
                    вызывает коррозию металлов. Легко смывается с поверхности.
                  </p>
                </div>
                <LinkButton
                  href='/produktsiya/neitralnye-sredstva/proff-eco'
                  className='group flex items-center justify-center gap-2 lg:hidden mt-auto w-full'
                >
                  Подробнее
                  <ArrowRightIcon className='h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1 [&>path]:stroke-[2]' />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
