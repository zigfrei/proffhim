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
              Удаление жиров, белка, крови и нагара
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Для ежедневной мойки оборудования и поверхностей с интенсивными
              органическими загрязнениями
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - растворение жировых и белковых отложений
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - удаление крови и технологических загрязнений
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - очистка нагара, копоти и обуглившихся остатков
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'> - жаровни и термокамеры</li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - разделочные и производственные линии
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - конвейеры, столы, трубопроводы, оборудование
                  </li>
                </ul>
              </div>
            </div>
            <LinkButton
              href='/produktsiya/shchelochnye-moyushchie-sredstva/proff-v'
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
                    src='/products/v.png'
                    alt='Средство моющее сильнощелочное Профф марки В'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство моющее Профф
                    марки&nbsp;В
                  </h3>
                  <p className='typo-b3'>
                    Предназначено для очистки ручным и автоматическим способом
                    внешних и внутренних поверхностей технологического
                    оборудования, термокамер, палок для копчения, тары на
                    предприятиях мясной и молочной промышленности.
                  </p>
                </div>
                <LinkButton
                  href='/produktsiya/shchelochnye-moyushchie-sredstva/proff-v'
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
