import { SectionBlockSmall } from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function Benefits() {
  return (
    <SectionBlockSmall wrapperClassName='pb-0!'>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h3 className='w-full typo-h3'>Мойте реже — прозрачность сохраняется дольше</h3>
        <ul className='grid w-full grid-cols-1 items-stretch gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4'>
          <li className='base-frame grid min-w-0 grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-3 gap-y-1 p-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:p-4 xl:flex xl:flex-col xl:gap-2'>
            <Icon
              icon='material-symbols:charger-outline'
              className='row-span-2 size-12 shrink-0 sm:size-14 xl:size-20'
            />
            <p className='typo-h5 leading-tight!'>Мощный антистатический эффект</p>
            <p className='typo-b3 leading-snug!'>
              Отталкивает пыль и грязь после нанесения.
            </p>
          </li>
          <li className='base-frame grid min-w-0 grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-3 gap-y-1 p-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:p-4 xl:flex xl:flex-col xl:gap-2'>
            <Icon
              icon='material-symbols:water-drops-outline'
              className='row-span-2 size-12 shrink-0 sm:size-14 xl:size-20'
            />
            <p className='typo-h5 leading-tight!'>Без разводов и пятен</p>
            <p className='typo-b3 leading-snug!'>
              Идеальная чистота даже на большой площади.
            </p>
          </li>
          <li className='base-frame grid min-w-0 grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-3 gap-y-1 p-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:p-4 xl:flex xl:flex-col xl:gap-2'>
            <Icon
              icon='material-symbols:cleaning-outline'
              className='row-span-2 size-12 shrink-0 sm:size-14 xl:size-20'
            />
            <p className='typo-h5 leading-tight!'>Лёгкое применение</p>
            <p className='typo-b3 leading-snug!'>
              Просто распылите и протрите микрофиброй.
            </p>
          </li>
          <li className='base-frame grid min-w-0 grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-3 gap-y-1 p-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:p-4 xl:flex xl:flex-col xl:gap-2'>
            <Icon
              icon='material-symbols:energy-savings-leaf-outline'
              className='row-span-2 size-12 shrink-0 sm:size-14 xl:size-20'
            />
            <p className='typo-h5 leading-tight!'>Безопасно для ПВХ</p>
            <p className='typo-b3 leading-snug!'>Не повреждает структуру плёнки.</p>
          </li>
        </ul>
      </div>
    </SectionBlockSmall>
  );
}
