import { SectionBlockSmall } from '@/components/ui/section';
import { Icon } from '@iconify/react';

const historyItems = [
  {
    year: ' ',
    title: 'Обсуждение задачи',
    description:
      'Мы внимательно выслушаем ваши потребности и требования, чтобы понять, какой продукт вы хотите создать.',
    icon: (
      <Icon
        icon='material-symbols:handshake-outline'
        className='w-8 h-8 text-base-black'
      />
    ),
  },
  {
    year: ' ',
    title: 'Разработка или подбор рецептуры',
    description:
      'Мы разрабатываем или подбираем рецептуру, чтобы создать продукт, соответствующий вашим требованиям.',
    icon: (
      <Icon
        icon='material-symbols:experiment-outline'
        className='w-8 h-8 text-base-black'
      />
    ),
  },
  {
    year: ' ',
    title: 'Образцы и тестирование',
    description:
      'Мы создаем образцы продукта и проводим тестирование, чтобы убедиться, что он соответствует вашим требованиям.',
    icon: (
      <Icon
        icon='material-symbols:lab-research-outline'
        className='w-8 h-8 text-base-black'
      />
    ),
  },
  {
    year: ' ',
    title: 'Согласование',
    description:
      'Мы согласовываем все детали проекта с вами, чтобы убедиться, что продукт соответствует вашим ожиданиям.',
    icon: (
      <Icon
        icon='material-symbols:check-circle-outline'
        className='w-8 h-8 text-base-black'
      />
    ),
  },
  {
    year: ' ',
    title: 'Регистрация продукции',
    description:
      'Мы регистрируем продукцию в соответствии с требованиями законодательства, чтобы обеспечить её легальное использование.',
    icon: (
      <Icon
        icon='material-symbols:assignment-outline'
        className='w-8 h-8 text-base-black'
      />
    ),
  },
  {
    year: ' ',
    title: 'Производство',
    description:
      'Мы начинаем производство продукции в соответствии с согласованными требованиями и стандартами качества.',
    icon: (
      <Icon
        icon='material-symbols:factory-outline'
        className='w-8 h-8 text-base-black'
      />
    ),
  },
  {
    year: ' ',
    title: 'Фасовка и отгрузка',
    description:
      'Мы фасуем и отгружаем продукцию в соответствии с согласованными требованиями и стандартами качества.',
    icon: (
      <Icon
        icon='material-symbols:local-shipping-outline'
        className='w-8 h-8 text-base-black'
      />
    ),
  },
];

export default function HowWeWork() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-0 lg:gap-4 mb-8'>
        <h2 className='w-full typo-h2 mb-4 lg:mb-0'>Как мы работаем</h2>

        <div className='w-full flex flex-col items-center justify-center gap-8 sm:gap-4 relative'>
          {historyItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.title}
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

                <div className='w-16 h-16 rounded-full bg-primary border-[5px] border-base-black shrink-0 flex items-center justify-center'>
                  {item.icon ? (
                    item.icon
                  ) : (
                    <Icon
                      icon='material-symbols:rocket-launch-outline'
                      className='w-8 h-8 text-base-black'
                    />
                  )}
                </div>
                <div className='w-full flex flex-col gap-2'>
                  {/* <p className='sm:hidden w-full flex text-sm! typo-h4'>
                    {item.year}
                  </p> */}
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
                {index === 0 && (
                  <div className='absolute w-[8px] h-1/2 top-[-1px] left-[28px] sm:left-1/2 transform sm:-translate-x-1/2 bg-main-background z-[-1] ' />
                )}
                {index === historyItems.length - 1 && (
                  <div className='absolute w-[8px] h-1/2 bottom-[-1px] left-[28px] sm:left-1/2 transform sm:-translate-x-1/2 bg-main-background z-[-1] ' />
                )}
              </div>
            );
          })}

          <div className='absolute w-[4px] h-full top-1/2 left-[30px] sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2 bg-base-black ' />
        </div>
      </div>
    </SectionBlockSmall>
  );
}
