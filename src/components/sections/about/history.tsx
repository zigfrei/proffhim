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
    year: "2001",
    title: "Основание научно-производственного кооператива",
    description: "Команда специалистов в области профессиональной химии основала научно-производственный кооператив по разработке и выпуску моющих средств. С первых этапов компания ориентировалась на технологичность, эффективность продукции и потребности промышленного сектора.",
    icon: <Icon icon='material-symbols:foundation' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2004",
    title: "Сотрудничество с научным сообществом",
    description: "Начато сотрудничество с учёными Беларуси, что позволило разработать ряд специализированных моющих средств для мясо-молочной промышленности с учётом строгих санитарных требований и отраслевых стандартов.",
    icon: <Icon icon='material-symbols:science' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2005",
    title: "Расширение промышленной линейки",
    description: "Ассортимент профессиональных моющих средств был увеличен более чем в три раза, что позволило закрыть широкий спектр задач предприятий пищевой промышленности и клининга.",
    icon: <Icon icon='material-symbols:trending-up' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2006",
    title: "Участие в государственной научной программе",
    description: "Компания приняла участие в государственной подпрограмме «Малотоннажная химия» совместно со специалистами НИИ физико-химических проблем и биологического факультета БГУ. В период 2004–2010 годов были проведены исследования, результатом которых стало создание новых поколений экологически безопасных и высокоэффективных дезинфицирующих средств.",
    icon: <Icon icon='material-symbols:biotech' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2012",
    title: "Смена собственника",
    description: "Произошла смена собственника предприятия, что стало отправной точкой для дальнейшей трансформации бизнеса, модернизации процессов и усиления рыночных позиций.",
    icon: <Icon icon='material-symbols:manage-accounts' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2013",
    title: "Основание ООО «ПроффХим»",
    description: "Ключевая команда специалистов, сохранив накопленный опыт и экспертизу, основала ООО «ПроффХим». Компания продолжила развитие в области производства профессиональных моющих и дезинфицирующих средств.",
    icon: <Icon icon='material-symbols:apartment' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2014",
    title: "Модернизация производства",
    description: "Проведена реконструкция производственных мощностей, получена государственная регистрация продукции и полный пакет разрешительной документации, подтверждающий соответствие требованиям безопасности и качества.",
    icon: <Icon icon='material-symbols:factory' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2015",
    title: "Рост ассортимента и рынков сбыта",
    description: "Компания значительно расширила продуктовую линейку и географию поставок, укрепив позиции на рынке профессиональной химии и увеличив клиентскую базу.",
    icon: <Icon icon='material-symbols:public' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2016",
    title: "Выход на рынок Российской Федерации",
    description: "Начаты поставки продукции на рынок России, что подтвердило конкурентоспособность и соответствие продукции требованиям международных рынков.",
    icon: <Icon icon='material-symbols:local-shipping' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2017",
    title: "Выход на рынок Казахстана",
    description: "Компания расширила экспортную географию, начав сотрудничество с партнёрами в Республике Казахстан и укрепив позиции на рынке СНГ.",
    icon: <Icon icon='material-symbols:travel-explore' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2018",
    title: "Запуск бытовой химии",
    description: "Начато производство средств бытовой химии, что позволило компании выйти в новый сегмент и предложить эффективные решения для повседневного использования.",
    icon: <Icon icon='material-symbols:home' className='w-8 h-8 text-base-black' />
  },
  {
    year: "2019",
    title: "Создание «ПроффХимПлюс»",
    description: "Открыто дочернее предприятие «ПроффХимПлюс», специализирующееся на реализации бытовой химии, средств для стирки и профессионального клининга.",
    icon: <Icon icon='material-symbols:account-tree' className='w-8 h-8 text-base-black' />
  },
{
  year: "2021",
  title: "Разработка антисептической технологии «СейфГАТ»",
  description: "В рамках государственной научно-технической программы «Перспективные химические и биологические технологии» (2021–2025 гг.), подпрограммы «Малотоннажная химия», разработан состав «СейфГАТ» и технология получения и применения антисептического средства для обработки кожевенного дублёного полуфабриката. Решение направлено на повышение эффективности защиты материалов и соответствие современным санитарным требованиям промышленности.",
  icon: <Icon icon='material-symbols:biotech' className='w-8 h-8 text-base-black' />
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
