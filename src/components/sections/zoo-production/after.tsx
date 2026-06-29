import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function After() {
  return (
    <SectionBlock wrapperClassName='py-8!'>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8'>
        <div className='w-full flex-col lg:flex-row flex items-stretch justify-stretch'>
          <div className='w-full flex items-center lg:items-start flex-col gap-4 p-4'>
            <Link href='/produktsiya/shchelochnye-moyushchie-sredstva'>
              <h2 className='w-full typo-h2'>
                Средства для обработки вымени после доения
              </h2>
            </Link>
            <h3 className='w-full typo-h4 text-center lg:text-left base-frame p-4 bg-primary'>
              Защита кожи вымени после доения
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Для обработки вымени сразу после доения с целью профилактики
              мастита и защиты кожи.
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'> - профилактика мастита</li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - снижение сухости кожи и риска появления трещин
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - защита вымени от заражения и загрязнения после доения
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - обработка сосков сразу после доения
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - ежедневная зоогигиеническая обработка дойных коров
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - защита кожи вымени в условиях интенсивного доения
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
                      src='/products/iodofit.png'
                      alt='Средство для обработки вымени Профф Йодофит После'
                      fill
                      sizes='(min-width: 768px) 50vw, 100vw'
                      className='object-cover'
                    />
                  </div>
                </div>

                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство для обработки вымени Профф Йодофит После
                  </h3>
                  <p className='typo-b3'>
                    Готовое гелеобразное средство для обработки вымени после
                    доения, профилактики мастита, сухости кожи и трещин.
                  </p>
                  <LinkButton
                    href='/produktsiya/zoogigienicheskie-sredstva/iodofit'
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
                      src='/products/geksafit.png'
                      alt='Средство для обработки вымени Профф Гексафит'
                      fill
                      sizes='(min-width: 768px) 50vw, 100vw'
                      className='object-cover'
                    />
                  </div>
                </div>

                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство для обработки вымени Профф Гексафит
                  </h3>
                  <p className='typo-b3'>
                    Готовое средство с хлоргексидином для обработки вымени после
                    доения, защиты кожи и профилактики мастита.
                  </p>
                  <LinkButton
                    href='/produktsiya/zoogigienicheskie-sredstva/geksafit'
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
                      src='/products/laktofit_after.png'
                      alt='Средство зоогигиеническое Профф Лактофит После'
                      fill
                      sizes='(min-width: 768px) 50vw, 100vw'
                      className='object-cover'
                    />
                  </div>
                </div>

                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство зоогигиеническое Профф Лактофит После
                  </h3>
                  <p className='typo-b3'>
                    Готовое гелеобразное средство с молочной кислотой для
                    обработки вымени после доения и профилактики мастита.
                  </p>
                  <LinkButton
                    href='/produktsiya/zoogigienicheskie-sredstva/laktofit_after'
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
