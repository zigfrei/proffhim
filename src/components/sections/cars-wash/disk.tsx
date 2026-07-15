import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Disk() {
  return (
    <SectionBlock wrapperClassName='py-8!'>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8'>
        <div className='w-full flex-col lg:flex-row-reverse flex items-stretch justify-stretch'>
          <div className='w-full flex items-center lg:items-start flex-col gap-4 p-4'>
            <h2 className='w-full typo-h2'>Средства для очистки дисков</h2>
            <h3 className='w-full typo-h4 text-center lg:text-left base-frame p-4 bg-primary'>
              Средство для очистки колесных дисков автомобиля
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Профессиональное средство для очистки колесных дисков
              предназначено для удаления минеральных загрязнений, ржавчины,
              окислов и солевых отложений.
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - глубокая очистка колесных дисков
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - удаление следов ржавчины и окислов
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - восстановление внешнего вида металлических поверхностей
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'> - колесные диски</li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - металлические поверхности, устойчивые к кислотным составам
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - поверхности с минеральными отложениями и следами жёсткой
                    воды
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col items-start gap-4 p-4'>
            <div className='w-full aspect-square flex flex-col base-frame p-2'>
              <h3 className='typo-body uppercase font-bold p-2'>
                Наше решение:
              </h3>
              <div className='w-full flex flex-col gap-4'>
                <div className='w-full aspect-square shrink-0 border-2 border-base-black relative'>
                  <Image
                    src='/products/kv.png'
                    alt='Средство моющее кислотное высокопенное «Профф КВ»'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство моющее кислотное высокопенное «Профф КВ»
                  </h3>
                  <p className='typo-b3'>
                    Профессиональное средство для очистки колесных дисков
                    автомобиля. Средство эффективно удаляет минеральные
                    загрязнения, следы ржавчины, окислы цветных металлов и
                    соединения жёсткости воды. Подходит для глубокой очистки
                    дисков и металлических поверхностей, помогает восстановить
                    чистоту и блеск.
                  </p>
                </div>
                <LinkButton
                  href='/produktsiya/kislotnye-moyushchie-sredstva/proff-kv'
                  className='group flex items-center justify-center gap-2 lg:hidden mt-auto w-full'
                >
                  Подробнее
                  <ArrowRightIcon className='h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1 [&>path]:stroke-[2]' />
                </LinkButton>
              </div>
            </div>
            <LinkButton
              href='/produktsiya/kislotnye-moyushchie-sredstva/proff-kv'
              className='group flex items-center justify-center gap-2 hidden lg:inline-flex w-full'
            >
              Подробнее
              <ArrowRightIcon className='h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1 [&>path]:stroke-[2]' />
            </LinkButton>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
