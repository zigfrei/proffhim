import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Before() {
  return (
    <SectionBlock wrapperClassName='py-8!'>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8'>
        <div className='w-full flex-col lg:flex-row flex items-stretch justify-stretch'>
          <div className='w-full flex items-center lg:items-start flex-col gap-4 p-4'>
            <Link href='/produktsiya/shchelochnye-moyushchie-sredstva'>
              <h2 className='w-full typo-h2'>
                Средства для обработки вымени до доения
              </h2>
            </Link>
            <h3 className='w-full typo-h4 text-center lg:text-left base-frame p-4 bg-primary'>
              Санитарная подготовка вымени перед доением
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Для регулярной обработки сосков и основания вымени перед
              надеванием стаканов доильного аппарата.
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - удаление загрязнений с поверхности кожи и сосков
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - санитарная подготовка вымени перед доением
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - снижение риска переноса загрязнений в процессе доения
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - обработка сосков перед доением
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - регулярная подготовка вымени в доильном зале
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - санитарная обработка перед надеванием доильных стаканов
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col items-start gap-4 p-4'>
            <div className='w-full aspect-square flex flex-col base-frame p-2 gap-4'>
              <h3 className='typo-body uppercase font-bold p-2'>
                Наши решения:
              </h3>
              <div className='w-full flex flex-col lg:flex-row gap-4'>
                <div className='w-full'>
                  <div className='w-full aspect-square shrink-0 border-2 border-base-black relative'>
                    <Image
                      src='/products/bifom.png'
                      alt='Средство для обработки вымени Профф Бифом'
                      fill
                      sizes='(min-width: 768px) 50vw, 100vw'
                      className='object-cover'
                    />
                  </div>
                </div>

                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство для обработки вымени Профф Бифом
                  </h3>
                  <p className='typo-b3'>
                    Концентрат с хлоргексидином для обработки вымени перед
                    доением и регулярной санитарной очистки сосков.
                  </p>
                  <LinkButton
                    href='/produktsiya/zoogigienicheskie-sredstva/bifom'
                    className='group flex items-center justify-center gap-2 mt-auto w-full'
                  >
                    Подробнее
                    <ArrowRightIcon className='h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1 [&>path]:stroke-[2]' />
                  </LinkButton>
                </div>
              </div>

              <div className='w-full flex flex-col lg:flex-row gap-4'>
                <div className='w-full'>
                  <div className='w-full aspect-square shrink-0 border-2 border-base-black relative'>
                    <Image
                      src='/products/oksifom.png'
                      alt='Средство для обработки вымени Профф Оксифом'
                      fill
                      sizes='(min-width: 768px) 50vw, 100vw'
                      className='object-cover'
                    />
                  </div>
                </div>

                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство для обработки вымени Профф Оксифом
                  </h3>
                  <p className='typo-b3'>
                    Готовое средство с перекисью водорода для обработки вымени
                    перед доением и очистки сосков от загрязнений.
                  </p>
                  <LinkButton
                    href='/produktsiya/zoogigienicheskie-sredstva/oksifom'
                    className='group flex items-center justify-center gap-2 mt-auto w-full'
                  >
                    Подробнее
                    <ArrowRightIcon className='h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1 [&>path]:stroke-[2]' />
                  </LinkButton>
                </div>
              </div>

              <div className='w-full flex flex-col lg:flex-row gap-4'>
                <div className='w-full'>
                  <div className='w-full aspect-square shrink-0 border-2 border-base-black relative'>
                    <Image
                      src='/products/laktofit.png'
                      alt='Средство зоогигиеническое Профф Лактофит ДО'
                      fill
                      sizes='(min-width: 768px) 50vw, 100vw'
                      className='object-cover'
                    />
                  </div>
                </div>

                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство зоогигиеническое Профф Лактофит ДО
                  </h3>
                  <p className='typo-b3'>
                    Концентрат с молочной кислотой для обработки вымени перед
                    доением и удаления загрязнений с сосков.
                  </p>
                  <LinkButton
                    href='/produktsiya/zoogigienicheskie-sredstva/laktofit'
                    className='group flex items-center justify-center gap-2 mt-auto w-full'
                  >
                    Подробнее
                    <ArrowRightIcon className='h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1 [&>path]:stroke-[2]' />
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
