import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Disinfection() {
  return (
    <SectionBlock wrapperClassName='py-8!'>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8'>
        <div className='w-full flex-col lg:flex-row flex items-stretch justify-stretch'>
          <div className='w-full flex items-center lg:items-start flex-col gap-4 p-4'>
            <Link href='/produktsiya/dezinfitsiruyushchie-sredstva'>
              <h2 className='w-full typo-h2'>Дезинфи&shy;цирующие средства</h2>
            </Link>
            <h3 className='w-full typo-h4 text-center lg:text-left base-frame p-4 bg-primary'>
              Контроль микробиологии на производстве
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Финальный этап санитарной обработки
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - уничтожают бактерии, дрожжи, плесень
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - снижают риск контаминации
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - обеспечивают безопасность продукции
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Варианты:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'> - хлорсодержащие</li>
                  <li className='typo-h5 p-0 m-0'> - ЧАС</li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - на основе надуксусной кислоты
                  </li>
                </ul>
              </div>
            </div>
            <LinkButton
              href='/produktsiya/dezinfitsiruyushchie-sredstva/proff-oksi'
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
                    src='/products/oksi.png'
                    alt='Средство дезинфицирующее кислотное беспенное Профф Окси'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство дезинфицирующее кислотное беспенное
                    &laquo;Профф&raquo; марки Окси
                  </h3>
                  <p className='typo-b3'>
                    Предназначено для комплексной аэрозольной или ручной
                    «холодной» дезинфекции оборудования и помещений предприятий
                    пищевой и непищевой промышленности, бытовых и жилых
                    помещений. Не требует смыва. На основе перекиси водорода и
                    молочной кислоты (или на основе перекиси водорода и
                    надуксусной кислоты).
                  </p>
                </div>
                <LinkButton
                  href='/produktsiya/dezinfitsiruyushchie-sredstva/proff-oksi'
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
