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
              Удаление молочного камня и минеральных отложений
            </h3>
            <p className='leading-tight! xl:leading-normal! typo-body border-l-[5px] border-primary pl-4'>
              Используются регулярно для предотвращения накопления накипи и отложений
            </p>

            <div className='w-full h-full flex flex-col items-stretch justify-start'>
              <div className='w-full flex flex-col items-stretch justify-start border-4 border-base-black'>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4 border-base-black'>
                  Что решают:
                </h3>
                <ul className='list-inside m-0 p-2 border-b-4'>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - удаляют молочный камень
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - предотвращают отложения солей
                  </li>
                  <li className='typo-h5 p-0 m-0'>
                    {' '}
                    - продлевают срок службы оборудования
                  </li>
                </ul>
                <h3 className='typo-body uppercase font-bold p-2 border-b-4  border-base-black'>
                  Где применяются:
                </h3>
                <ul className='list-inside m-0 p-2'>
                  <li className='typo-h5 p-0 m-0'> - CIP-мойка</li>
                  <li className='typo-h5 p-0 m-0'> - теплообменники</li>
                  <li className='typo-h5 p-0 m-0'> - емкости хранения</li>
                </ul>
              </div>
            </div>
            <LinkButton
              href='/produktsiya/kislotnye-moyushchie-sredstva/proff-kn-a'
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
                    src='/products/kn-a.png'
                    alt='Средство моющее Профф КН-А'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='w-full typo-h5 font-bold'>
                    Средство моющее техническое кислотное &laquo;Профф&raquo; марки КН-А
                  </h3>
                  <p className='typo-b3'>
                    Кислотное средство для очистки доильных установок,
                    трубопроводов, резервуаров, теплообменников,
                    вакуум-аппаратов, инвентаря и тары. Удаляет солевые
                    отложения, молочный камень, ржавчину и
                    камень жесткости воды.
                  </p>
                </div>
                <LinkButton
                  href='/produktsiya/kislotnye-moyushchie-sredstva/proff-kn-a'
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
