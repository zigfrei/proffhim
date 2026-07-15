import { SectionBlockSmall } from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function Application() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full text-center typo-h3'>Применение на автомойках и в сервисных зонах</h2>
        <ul className='w-full flex-1 flex flex-col lg:flex-row items-stretch gap-4'>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:local-car-wash-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              бескон&shy;тактная мойка кузова
            </h3>
          </li>

          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:precision-manufacturing-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              мойка двигателя и технических узлов
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:tire-repair-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              очистка колесных дисков
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:local-shipping-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              мойка тентов, прицепов и коммерческого транспорта
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:garage-home-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              автомойки, СТО и детейлинг-центры
            </h3>
          </li>
        </ul>
      </div>
    </SectionBlockSmall>
  );
}
