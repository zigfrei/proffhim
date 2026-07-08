import SectionBlockSmall from '@/components/ui/section';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function DocumentManagement() {
  return (
    <SectionBlockSmall wrapperClassName='lg:py-10!'>
      <div className='w-full flex-col flex items-stretch justify-stretch base-frame-big'>
        <div className='w-full flex items-center lg:items-start flex-col gap-4 bg-primary p-4 lg:p-8 border-b-[5px] border-base-black'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            По каждой поставке предоставляем комплект сопроводительных и закрывающих документов.
          </h2>
        </div>
        <div className='w-full flex flex-col items-start gap-4 p-4 lg:p-8'>
          <div className='w-full gap-4'>

            <ul className='flex flex-col gap-4 xl:text-base-black'>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Счет на оплату.</p>
              </li>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Накладные / УПД.</p>
              </li>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Счета-фактуры, если применимо.</p>
              </li>
                            <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Акты сверки по запросу или в рамках регулярного сотрудничества.</p>
              </li>
                            <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Сертификаты и иные документы на продукцию.</p>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
