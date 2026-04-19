import { SectionBlockSmall } from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function WhyWe() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full text-center typo-h2'>Почему выбирают нас</h2>
        <ul className='w-full flex-1 flex flex-col lg:flex-row items-stretch gap-4'>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:biotech-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Собственная лаборатория
            </h3>
          </li>

          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:experiment-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Полный цикл производства
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:description-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Регистрация под клиента
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:assignment-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Быстрый запуск продукции
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:check-circle-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Опыт работы с B2B клиентами
            </h3>
          </li>
        </ul>
      </div>
    </SectionBlockSmall>
  );
}
