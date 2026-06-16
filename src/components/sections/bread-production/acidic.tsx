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
              Удаление минеральных и солевых отложений
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Для периодической мойки участков, где помимо органики
              накапливаются минеральные и оксидные загрязнения
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - удаление солевых, известковых и оксидных отложений
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - очистка от налёта там, где используется жёсткая вода
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - подготовка поверхностей к дальнейшей мойке и дезинфекции
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - теплообменники, парогенераторы, ёмкости
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - участки с жёсткой водой и известковым налётом
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - поверхности с комбинированными загрязнениями (органика +
                    минералы)
                  </li>
                </ul>
              </div>
            </div>
            <LinkButton
              href='/produktsiya/kislotnye-moyushchie-sredstva/proff-kv'
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
                    src='/products/kv.png'
                    alt='Средство моющее кислотное высокопенное Профф КВ'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство моющее кислотное высокопенное Профф&nbsp;КВ
                  </h3>
                  <p className='typo-b3'>
                    Предназначено для очистки внешних поверхностей оборудования,
                    механизмов, инвентаря и тары, сантехнических изделий,
                    керамики, а также стен и полов, облицованных плиткой, от
                    минеральных загрязнений, следов ржавчины и окиси на
                    поверхностях цветных металлов, соединений жёсткости воды.
                    Рекомендовано для мойки поверхностей оборудования из
                    нержавеющей стали до глянцевого блеска.
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
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
