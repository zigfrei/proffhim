import { SectionBlockSmall } from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function Application() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full text-center typo-h3'>Применение на животноводческих предприятиях</h2>
        <ul className='w-full flex-1 flex flex-col lg:flex-row items-stretch gap-4'>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:cleaning-services-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Обработка вымени до доения
            </h3>
          </li>

          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:health-and-safety-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Обработка вымени после доения
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:routine-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Регулярная гигиена дойного стада
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:footprint-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Копытные ванны и профилактика заболеваний копыт
            </h3>
          </li>
          <li className='w-full flex-1 flex flex-col items-center self-stretch gap-2 base-frame p-4'>
            <Icon
              icon='material-symbols:warehouse-outline'
              className='w-20 h-20 text-base-black'
            />
            <h3 className='typo-h5 text-center'>
              Доильные залы и зоны содержания животных
            </h3>
          </li>
        </ul>
      </div>
    </SectionBlockSmall>
  );
}
