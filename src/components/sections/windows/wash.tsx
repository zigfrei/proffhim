import HoseIcon from '@/assets/icons/windows/hose.svg';
import { SectionBlockSmall } from '@/components/ui/section';
import { Icon } from '@iconify/react';

const iconClassName = 'size-14 shrink-0 sm:size-16 xl:size-20';

function ForbiddenIcon({ icon }: { icon: string }) {
  return (
    <div className='relative shrink-0' aria-hidden='true'>
      <Icon icon={icon} className={iconClassName} />
      <span className='absolute top-1/2 left-1/2 h-1 w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary outline-2 outline-base-black' />
    </div>
  );
}

export default function Wash() {
  return (
    <SectionBlockSmall wrapperClassName='pb-0!'>
      <div className='grid w-full grid-cols-1 items-stretch gap-8 xl:grid-cols-2 xl:gap-12'>
        <div className='flex h-full w-full flex-col items-start gap-4 lg:gap-8'>
          <h3 className='w-full typo-h3'>
            Как мыть мягкие окна: 3 простых шага
          </h3>

          <ol className='grid w-full grid-cols-1 items-stretch gap-4 min-[520px]:grid-cols-3'>
            <li className='base-frame relative flex min-h-44 flex-col items-center gap-3 p-3 pt-12 text-center sm:h-52 sm:min-h-0 sm:p-4 sm:pt-14'>
              <span className='absolute top-3 left-3 typo-h4' aria-hidden='true'>
                1.
              </span>
              <HoseIcon
                className={iconClassName}
                aria-hidden='true'
              />
              <p className='mt-auto typo-b3 leading-tight! tracking-normal!'>
                Ополосните песок и грязь водой
              </p>
            </li>

            <li className='base-frame relative flex min-h-44 flex-col items-center gap-3 p-3 pt-12 text-center sm:h-52 sm:min-h-0 sm:p-4 sm:pt-14'>
              <span className='absolute top-3 left-3 typo-h4' aria-hidden='true'>
                2.
              </span>
              <Icon
                icon='material-symbols:household-supplies-outline'
                className={iconClassName}
                aria-hidden='true'
              />
              <p className='mt-auto typo-b3 leading-tight! tracking-normal!'>
                Распылите средство на поверхность
              </p>
            </li>

            <li className='base-frame relative flex min-h-44 flex-col items-center gap-3 p-3 pt-12 text-center sm:h-52 sm:min-h-0 sm:p-4 sm:pt-14'>
              <span className='absolute top-3 left-3 typo-h4' aria-hidden='true'>
                3.
              </span>
              <Icon
                icon='material-symbols:wash-outline'
                className={iconClassName}
                aria-hidden='true'
              />
              <p className='mt-auto typo-b3 leading-tight! tracking-normal!'>
                Протрите чистой микрофиброй
              </p>
            </li>
          </ol>
        </div>

        <div className='flex h-full w-full flex-col items-start gap-4 lg:gap-8'>
          <h3 className='w-full typo-h3'>
            Важно: бережный уход для ПВХ
          </h3>

          <ul className='base-frame mt-auto grid w-full grid-cols-1 sm:h-52 sm:grid-cols-3'>
            <li className='flex min-h-32 items-center gap-4 border-b-[3px] border-base-black p-4 sm:min-h-0 sm:flex-col sm:justify-center sm:border-r-[3px] sm:border-b-0 sm:text-center'>
              <ForbiddenIcon icon='material-symbols:texture' />
              <p className='typo-b3 leading-tight! tracking-normal!'>
                Не используйте абразивы
              </p>
            </li>

            <li className='flex min-h-32 items-center gap-4 border-b-[3px] border-base-black p-4 sm:min-h-0 sm:flex-col sm:justify-center sm:border-r-[3px] sm:border-b-0 sm:text-center'>
              <ForbiddenIcon icon='material-symbols:brush-outline' />
              <p className='typo-b3 leading-tight! tracking-normal!'>
                Не используйте жёсткие щётки
              </p>
            </li>

            <li className='flex min-h-32 items-center gap-4 p-4 sm:min-h-0 sm:flex-col sm:justify-center sm:text-center'>
              <Icon
                icon='material-symbols:verified-user-outline'
                className={iconClassName}
                aria-hidden='true'
              />
              <p className='typo-b3 leading-tight! tracking-normal!'>
                БЕРЕЖНО ОЧИЩАЙТЕ ПВХ-ПЛЁНКУ
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
