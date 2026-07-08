import SectionBlockSmall from '@/components/ui/section';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Finance() {
  return (
    <SectionBlockSmall wrapperClassName='lg:py-10!'>
      <div className='w-full flex-col flex items-stretch justify-stretch base-frame-big'>
        <div className='w-full flex items-center lg:items-start flex-col gap-4 bg-primary p-4 lg:p-8 border-b-[5px] border-base-black'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            Работаем по безналичному расчету. Условия оплаты зависят от формата сотрудничества, объема закупки и статуса партнера.
          </h2>
        </div>
        <div className='w-full flex flex-col items-start gap-4 p-4 lg:p-8'>
          <div className='w-full gap-4'>

            <ul className='flex flex-col gap-4 xl:text-base-black'>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Работаем с НДС и без НДС.</p>
              </li>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Оплата производится по выставленному счету.</p>
              </li>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Для первых поставок может применяться 100% предоплата.</p>
              </li>
                            <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Возможна частичная предоплата, если это предусмотрено условиями сделки.</p>
              </li>
                            <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Для постоянных партнеров могут согласовываться индивидуальные условия оплаты и отсрочка платежа.</p>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
