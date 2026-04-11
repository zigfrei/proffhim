import {SectionBlockSmall} from '@/components/ui/section';
import { RocketLaunchIcon, GlobeAltIcon, GlobeEuropeAfricaIcon, TruckIcon } from '@heroicons/react/24/outline';

const historyItems = [
  {
    year: '2004',
    title: 'Основание компании',
    description: 'Компания была основана в 2004 году с целью предоставления высококачественных химических продуктов и услуг.',
    icon: <RocketLaunchIcon className='w-8 h-8 text-base-black' />,
  },
  {
    year: '2008',
    title: 'Расширение ассортимента',
    description: 'Компания расширила ассортимент, добавив новые линии продуктов для различных отраслей промышленности.',
    icon: <GlobeAltIcon className='w-8 h-8 text-base-black' />,
  },
  {
    year: '2012',
    title: 'Выход на международный рынок',
    description: 'Компания начала экспортировать свою продукцию на международные рынки, укрепив свои позиции в отрасли.',
    icon: <TruckIcon className='w-8 h-8 text-base-black' />,
  },
  {
    year: '2018',
    title: 'Внедрение инновационных технологий',
    description: 'Компания инвестировала в новые технологии производства, улучшив качество продукции и эффективность процессов.',
    icon: <GlobeEuropeAfricaIcon className='w-8 h-8 text-base-black' />,
  },
];

export default function History() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-0 lg:gap-4 mb-8'>
        <h2 className='w-full typo-h2'>История<br />компании</h2>

        <div className='w-full flex flex-col items-center justify-center gap-8 sm:gap-4 relative'>
          {historyItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.year}
                className={`w-full flex items-center justify-center gap-4 z-10 relative ${
                  isEven ? 'flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <span
                  className={`w-full hidden sm:block typo-h4 text-lg md:text-xl ${
                    isEven ? 'text-right' : 'text-left' 
                  }`}
                >
                  {item.year}
                </span>

                <div className='w-16 h-16 rounded-full bg-primary border-[5px] border-base-black shrink-0 flex items-center justify-center' >
                  {item.icon ? item.icon : <RocketLaunchIcon className='w-8 h-8 text-base-black' />}
                </div>
                <div className='w-full flex flex-col gap-2'>
                  <p className='sm:hidden w-full flex typo-h4 text-xl!'>
                    {item.year}
                  </p>
                  <p
                    className={`w-full typo-h4 text-lg! sm:text-base! lg:text-[2rem]! ${
                      isEven ? 'text-left' : 'sm:text-right'
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`w-full typo-body text-base md:text-lg ${
                      isEven ? 'text-left' : 'sm:text-right'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
                {index === 0 && (<div className='absolute w-[8px] h-1/2 top-[-1px] left-[28px] sm:left-1/2 transform sm:-translate-x-1/2 bg-main-background z-[-1] ' />)}
                {index === historyItems.length - 1 && (<div className='absolute w-[8px] h-1/2 bottom-[-1px] left-[28px] sm:left-1/2 transform sm:-translate-x-1/2 bg-main-background z-[-1] ' />)}
              </div>
            );
          })}

          <div className='absolute w-[4px] h-full top-1/2 left-[30px] sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2 bg-base-black ' />
        </div>
      </div>
    </SectionBlockSmall>
  );
}
