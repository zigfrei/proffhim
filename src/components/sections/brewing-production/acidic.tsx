import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Acidic() {
  return (
    <SectionBlock wrapperClassName='py-8!'>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8'>
        <div className='w-full flex-col lg:flex-row-reverse flex items-stretch justify-stretch'>
          <div className='w-full flex items-center lg:items-start flex-col gap-4 p-4'>
            <Link href='/produktsiya/kislotnye-moyushchie-sredstva'>
              <h2 className='w-full typo-h2'>Кислотные моющие средства</h2>
            </Link>
            <h3 className='w-full typo-h4 text-center lg:text-left base-frame p-4 bg-primary'>
              Удаление пивного камня и минеральных отложений
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Специализированные средства для удаления солей жёсткости и пивного
              камня
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - удаление пивного камня и минеральных отложений
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - очистка ЦКТ, кегов и ёмкостей от солей жёсткости
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - восстановление чистоты внутренних поверхностей и
                    теплопередачи
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - цилиндроконические танки (ЦКТ) и бродильные резервуары
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - кеги и ёмкости хранения
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - участки с выраженными минеральными или известковыми
                    отложениями
                  </li>
                </ul>
              </div>
            </div>
            <LinkButton
              href='/produktsiya/kislotnye-moyushchie-sredstva/proff-as'
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
                    src='/products/as.png'
                    alt='Средство моющее техническое кислотное Профф АС'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство моющее техническое кислотное Профф марки&nbsp;АС
                  </h3>
                  <p className='typo-b3'>
                    Предназначено для очистки внутренних и внешних поверхностей
                    доильных установок, трубопроводов, резервуаров,
                    теплообменников, вакуум-аппаратов и другого оборудования,
                    инвентаря и тары от солевых отложений, молочного, мясного,
                    пивного камней, удаления ржавчины. Применяется для отмывки
                    водооборотных систем от солей жёсткой воды, накипи. Содержит
                    соляную кислоту.
                  </p>
                </div>
                <LinkButton
                  href='/produktsiya/kislotnye-moyushchie-sredstva/proff-as'
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
