import { SectionBlockSmall } from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function Application() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full text-center typo-h3'>Применение на хлебопекарных и кондитерских предприятиях</h2>
        <ul className='w-full flex-1 flex flex-col lg:flex-row items-stretch gap-4'>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:blender-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Тестомесильные и технологические ёмкости
            </h3>
          </li>

          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:oven-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Жаровые и кондитерские печи, духовые шкафы
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:precision-manufacturing-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Конвейерные линии, дозаторы и транспортёры
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:countertops-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Рабочие столы, инвентарь, стеллажи и тележки
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:warehouse-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Производственные и складские помещения, зоны упаковки
            </h3>
          </li>
        </ul>
      </div>
    </SectionBlockSmall>
  );
}
