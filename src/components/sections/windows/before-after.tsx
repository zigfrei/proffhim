import SectionBlock from '@/components/ui/section';
import BeforeAndAfterItem from '@/components/ui/before-after-box';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function BeforeAndAfter() {
  return (
    <SectionBlock>
      <div className='flex w-full flex-col items-start justify-center gap-4 lg:gap-8'>
        <h2 className='typo-h3'>Чем мыть мягкие окна из ПВХ без разводов
</h2>
        <div className='grid w-full grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-12'>
          <div className='lg:col-span-7'>
            <BeforeAndAfterItem
              beforeSrc='/windows/before.webp'
              afterSrc='/windows/after.webp'
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-4 lg:gap-8 lg:col-span-5'>
              <div className='w-full max-w-[550px] flex flex-col items-start justify-center gap-4 p-4 lg:p-8 base-frame lg:base-frame-big'>
                <h3 className='typo-h5 xl:typo-h45'>Профф SHKLO — средство для мытья мягких окон из ПВХ. Оно помогает очистить ПВХ-плёнку без мутного налёта и разводов, удаляя типичные сезонные загрязнения:</h3>
                <div className='flex items-center justify-center gap-2'>
                  <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                    <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                  </div>
                  <p className='typo-b3 xl:typo-b2 uppercase'>Уличную и строительную пыль</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                    <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                  </div>
                  <p className='typo-b3 xl:typo-b2 uppercase'>Следы дождя и брызги</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                    <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                  </div>
                  <p className='typo-b3 xl:typo-b2 uppercase'>Отпечатки пальцев</p>
                </div>
                                <div className='flex items-center justify-center gap-2'>
                  <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                    <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                  </div>
                  <p className='typo-b3 xl:typo-b2 uppercase'>Следы насекомых</p>
                </div>
              </div>
              <p className='typo-b2 xl:typo-body max-w-[550px]'>Передвиньте слайдер, чтобы увидеть результат очистки мягкого окна до и после применения Профф SHKLO.</p>
            </div>
        </div>
      </div>
    </SectionBlock>
  );
}
