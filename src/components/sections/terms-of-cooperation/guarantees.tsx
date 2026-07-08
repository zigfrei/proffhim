import SectionBlockSmall from '@/components/ui/section';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Guarantees() {
  return (
    <SectionBlockSmall wrapperClassName='lg:py-10!'>
      <div className='w-full flex-col flex items-stretch justify-stretch base-frame-big'>
        <div className='w-full flex items-center lg:items-start flex-col gap-4 bg-primary p-4 lg:p-8 border-b-[5px] border-base-black'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            Мы заинтересованы в прозрачной и понятной процедуре приемки товара и рассмотрения обращений по поставке.
          </h2>
        </div>
        <div className='w-full flex flex-col items-start gap-4 p-4 lg:p-8'>
          <div className='w-full gap-4'>

            <ul className='flex flex-col gap-4 xl:text-base-black'>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Проверка товара по количеству и качеству осуществляется при приемке.</p>
              </li>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Претензии по количеству, качеству или комплектности принимаются в течение 5 рабочих дней с момента получения товара.</p>
              </li>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>При обнаружении брака клиент направляет обращение с описанием проблемы и подтверждающими материалами.</p>
              </li>
                            <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Основанием для рассмотрения может быть акт по согласованной форме или внутренний шаблон компании.</p>
              </li>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Порядок замены товара, доукомплектации или иного урегулирования определяется по результатам рассмотрения обращения.</p>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
