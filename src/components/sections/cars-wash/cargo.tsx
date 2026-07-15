import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Cargo() {
  return (
    <SectionBlock wrapperClassName='py-8!'>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8'>
        <div className='w-full flex-col lg:flex-row flex items-stretch justify-stretch'>
          <div className='w-full flex items-center lg:items-start flex-col gap-4 p-4'>
            <h2 className='w-full typo-h2'>Эффектив&shy;ная мойка тентов и коммер&shy;ческого транспорта</h2>

            <h3 className='w-full typo-h4 text-center lg:text-left base-frame p-4 bg-primary'>
              Эффективная мойка тентов и коммерческого транспорта
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Профессиональное средство для мойки тентов, фургонов, грузовых отсеков и сильно загрязнённых поверхностей коммерческого транспорта.
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - удаление жировых, масляных и стойких эксплуатационных загрязнений
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - очистка тентов и наружных поверхностей коммерческого транспорта
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - дополнительная санитарная обработка благодаря дезинфицирующим свойствам
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - тенты грузовых автомобилей
                  </li>
                  <li className='typo-h5 p-0 m-0'> - прицепы, фургоны, грузовые отсеки</li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - коммерческий транспорт и различные моющиеся поверхности
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
                    src='/products/active.png'
                    alt='Профф ВА'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство моющее и дезинфицирующее щелочное пенное «Профф» марки ВА
                  </h3>
                  <p className='typo-b3'>
                    высокопенное профессиональное средство для мойки тентов, коммерческого транспорта и сильно загрязнённых поверхностей. Подходит для нанесения пеногенератором, аппаратами высокого давления, а также ручным способом. Формула на основе ЧАС обладает дополнительными дезинфицирующими свойствами.
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
            <LinkButton
              href='/produktsiya/shchelochnye-moyushchie-i-dezinfitsiruyushchie-sredstva/proff-va'
              className='group items-center justify-center gap-2 hidden lg:flex w-full'
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
