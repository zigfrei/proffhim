import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Alkaline() {
  return (
    <SectionBlock wrapperClassName='py-8!'>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8'>
        <div className='w-full flex-col lg:flex-row flex items-stretch justify-stretch'>
          <div className='w-full flex items-center lg:items-start flex-col gap-4 p-4'>
            <Link href='/produktsiya/shchelochnye-moyushchie-sredstva'>
              <h2 className='w-full typo-h2'>Щелочные моющие средства</h2>
            </Link>
            <h3 className='w-full typo-h4 text-center lg:text-left base-frame p-4 bg-primary'>
              Удаление белковых и хмелевых загрязнений
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Основные средства для удаления органических загрязнений в
              пивоварении и производстве напитков.
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - удаление белковых, хмелевых и органических отложений
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - очистка внутренних поверхностей варочных котлов и
                    теплообменников
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - эффективная CIP‑мойка без излишнего механического
                    воздействия
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - варочные котлы и сусловарочные аппараты
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - теплообменники и трубопроводы
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - внутренние поверхности резервуаров и технологических линий
                  </li>
                </ul>
              </div>
            </div>
            <LinkButton
              href='/produktsiya/shchelochnye-moyushchie-i-dezinfitsiruyushchie-sredstva/proff-va'
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
                    src='/products/va.png'
                    alt='Средство моющее и дезинфицирующее щелочное пенное Профф марки ВА'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство моющее и дезинфицирующее щелочное пенное Профф
                    марки&nbsp;ВА
                  </h3>
                  <p className='typo-b3'>
                    Предназначено для пенной мойки и дезинфекции внешних
                    поверхностей различных видов технологического оборудования,
                    инвентаря и тары, полов, стен с использованием
                    пеногенераторов, аппаратов высокого давления или ручным
                    способом.
                  </p>
                </div>
                <LinkButton
                  href='/produktsiya/shchelochnye-moyushchie-i-dezinfitsiruyushchie-sredstva/proff-va'
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
