import {SectionBlockSmall} from '@/components/ui/section';
import { RocketLaunchIcon, GlobeAltIcon, GlobeEuropeAfricaIcon, TruckIcon } from '@heroicons/react/24/outline';
import { Icon } from '@iconify/react';

// const historyItems = [
//   {
//     year: '2004',
//     title: 'Основание компании',
//     description: 'Компания была основана в 2004 году с целью предоставления высококачественных химических продуктов и услуг.',
//     icon: <RocketLaunchIcon className='w-8 h-8 text-base-black' />,
//   },
//   {
//     year: '2008',
//     title: 'Расширение ассортимента',
//     description: 'Компания расширила ассортимент, добавив новые линии продуктов для различных отраслей промышленности.',
//     icon: <GlobeAltIcon className='w-8 h-8 text-base-black' />,
//   },
//   {
//     year: '2012',
//     title: 'Выход на международный рынок',
//     description: 'Компания начала экспортировать свою продукцию на международные рынки, укрепив свои позиции в отрасли.',
//     icon: <TruckIcon className='w-8 h-8 text-base-black' />,
//   },
//   {
//     year: '2018',
//     title: 'Внедрение инновационных технологий',
//     description: 'Компания инвестировала в новые технологии производства, улучшив качество продукции и эффективность процессов.',
//     icon: <GlobeEuropeAfricaIcon className='w-8 h-8 text-base-black' />,
//   },
// ];

const historyItems = [
  {
    year: "2003",
    title: "Основание компании",
    description: "Компания начала свою деятельность в городе Гродно как поставщик и официальный дилер профессиональных моющих средств. С первых лет работы был сделан акцент на качестве продукции, надежных партнёрских отношениях и глубоком понимании потребностей клиентов.",
    icon:       <Icon
        icon='material-symbols:foundation'
        className='w-8 h-8 text-base-black'
      />
  },
  {
    year: "2004",
    title: "Расширение на рынок Беларуси",
    description: "Компания начала поставки моющих средств по всей территории Республики Беларусь. Несмотря на небольшой охват на старте, были заключены первые контракты с клиентами за пределами Гродненской области, что стало важным шагом в развитии региональной сети.",
    icon: <Icon
        icon='material-symbols:map-outline'
        className='w-8 h-8 text-base-black'
      />
  },
  {
    year: "2008",
    title: "Создание собственного производства",
    description: "Основан научно-производственный кооператив, что позволило перейти от дистрибуции к разработке и производству собственной химической продукции. Это стало ключевым этапом в формировании экспертизы компании в области профессиональной химии.",
    icon: <Icon
        icon='material-symbols:factory'
        className='w-8 h-8 text-base-black'
      />
  },
  {
    year: "2009",
    title: "Первая линейка щелочных средств",
    description: "Разработана и выведена на рынок первая линейка щелочных моющих средств для промышленного и профессионального применения. Продукция показала высокую эффективность и получила положительные отзывы от клиентов.",
    icon: <Icon
        icon='material-symbols:water-ec-outline'
        className='w-8 h-8 text-base-black'
      />
  },
  {
    year: "2010",
    title: "Линейка кислотных средств",
    description: "Компания расширила ассортимент, запустив производство кислотных моющих средств. Новая линейка позволила закрыть более широкий спектр задач в пищевой промышленности и сфере клининга.",
    icon: <Icon
        icon='material-symbols:experiment-outline'
        className='w-8 h-8 text-base-black'
      />
  },
  {
    year: "2011",
    title: "Разработка дезинфицирующих средств",
    description: "В сотрудничестве с крупным агрохолдингом были разработаны и внедрены эффективные дезинфицирующие средства. Продукция успешно применяется в агропромышленном комплексе и соответствует современным стандартам безопасности.",
    icon: <Icon
        icon='material-symbols:shield-outline'
        className='w-8 h-8 text-base-black'
      />
  },
  {
    year: "2015",
    title: "Основание ООО «ПроффХим»",
    description: "Создано юридическое лицо ООО «ПроффХим», что позволило структурировать бизнес, усилить позиции на рынке и обеспечить дальнейшее масштабирование производства и продаж.",
    icon: <Icon
        icon='material-symbols:apartment'
        className='w-8 h-8 text-base-black'
      />
  },
  {
    year: "2016",
    title: "Выход на рынок России",
    description: "Компания начала экспорт продукции на рынок Российской Федерации. Это стало важным этапом международного развития и подтверждением конкурентоспособности продукции.",
    icon: <Icon
        icon='material-symbols:public'
        className='w-8 h-8 text-base-black'
      />
  },
  {
    year: "2020",
    title: "Расширение ассортимента",
    description: "Создано направление «ПроффХимПлюс», ориентированное на расширение продуктовой линейки и внедрение новых решений для профессиональной химии и промышленной очистки.",
    icon: <Icon
        icon='material-symbols:add-task'
        className='w-8 h-8 text-base-black'
      />
  },
  {
    year: "2021",
    title: "Внедрение инновационных технологий",
    description: "Компания внедрила современные технологии производства и контроля качества, что позволило повысить эффективность продукции и соответствовать международным стандартам.",
    icon: <Icon
        icon='material-symbols:biotech'
        className='w-8 h-8 text-base-black'
      />
  }
]

export default function History() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-0 lg:gap-4 mb-8'>
        <h2 className='w-full typo-h2 mb-4 lg:mb-0'>История<br />компании</h2>

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
