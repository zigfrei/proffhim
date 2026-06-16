import { SectionBlockSmall } from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function Application() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full text-center typo-h2'>Применение на молочных предприятиях</h2>
        <ul className='w-full flex-1 flex flex-col lg:flex-row items-stretch gap-4'>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:precision-manufacturing-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              доильное оборудование и танки
            </h3>
          </li>

          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:autorenew'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              CIP-мойка линий и трубопроводов
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:handyman'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              разборные элементы (COP-мойка)
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:soap'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              внешняя пенная мойка
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:inventory-2-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              тара и емкости
            </h3>
          </li>
        </ul>
      </div>
    </SectionBlockSmall>
  );
}
