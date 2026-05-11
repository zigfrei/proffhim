import SectionBlock from '@/components/ui/section';
import { Icon } from '@iconify/react';
import { BigButton } from '@/components/ui/buttons';

const steps = [
  {
    question: 'Где используется мойка?',
    options: [
      {
        label: 'Пищевая промышленность',
        icon: 'material-symbols:factory',
      },
      {
        label: 'Молочное производство',
        icon: 'material-symbols:water-drop',
      },
      {
        label: 'Пивоварение / напитки',
        icon: 'material-symbols:local-bar',
      },
      {
        label: 'Мясное производство',
        icon: 'material-symbols:restaurant',
      },
      {
        label: 'HoReCa / кухни',
        icon: 'material-symbols:skillet',
      },
      {
        label: 'Клининг',
        icon: 'material-symbols:cleaning-services',
      },
      {
        label: 'Производственные цеха',
        icon: 'material-symbols:precision-manufacturing',
      },
      {
        label: 'Агропром',
        icon: 'material-symbols:agriculture',
      },
      {
        label: 'Автомойка / транспорт',
        icon: 'material-symbols:local-car-wash',
      },
      {
        label: 'Другое',
        icon: 'material-symbols:more-horiz',
      },
    ],
  },
];

export default function Quiz() {
  const currentStep = steps[0];

  return (
    <SectionBlock>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-16'>
        <h2 className='typo-h3 text-center'>Подбор промышленной химии под ваше производство</h2>
        {/* <h3 className='typo-h4 text-center'>Ответьте на несколько вопросов, чтобы мы могли подобрать оптимальные средства для вашего производства</h3> */}
        <div className='base-frame w-full flex flex-col items-start justify-center gap-4 p-4 lg:p-8'>
          <p className='typo-h4'>{currentStep.question}</p>
          <div className='grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4'>
            {currentStep.options.map((option) => (
              <button
                key={option.label}
                type='button'
                className='group flex min-h-24 flex-col items-start justify-between gap-2 bg-main-background p-4 text-left transition-colors hover:bg-primary base-frame'
              >
                <Icon
                  icon={option.icon}
                  className='h-7 w-7 text-base-black'
                />
                <span className='typo-b2 text-base-black'>{option.label}</span>
              </button>
            ))}
          </div>
          <div className='w-full flex items-center justify-center gap-4'>
            <BigButton className='bg-primary text-base-black'>Далее</BigButton>
            <BigButton className='bg-main-background text-base-black'>Пропустить</BigButton>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
