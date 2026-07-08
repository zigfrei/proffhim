import SectionBlockSmall from '@/components/ui/section';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Delivery() {
  return (
    <SectionBlockSmall wrapperClassName='lg:py-10!'>
      <div className='w-full flex-col flex items-stretch justify-stretch base-frame-big'>
        <div className='w-full flex items-center lg:items-start flex-col gap-4 bg-primary p-4 lg:p-8 border-b-[5px] border-base-black'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            Условия поставки зависят от объема заказа, региона и выбранного способа получения товара.
          </h2>
        </div>
        <div className='w-full flex flex-col items-start gap-4 p-4 lg:p-8'>
          <div className='w-full gap-4'>

            <ul className='flex flex-col gap-4 xl:text-base-black'>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>География поставок: Беларусь, Россия, Казахстан</p>
              </li>
              <li className='flex items-center gap-2'>
                <div className='flex items-start justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Доставка: по согласованным условиям через собственную логистику или транспортные компании.</p>
              </li>
              <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Для доставки грузов мы сотрудничаем с транспортной компанией «Автолайтэкспресс» и сетью проверенных перевозчиков (ИП), обеспечивая регулярные поставки по Беларуси, а также в Россию и Казахстан.</p>
              </li>
                            <li className='flex items-start gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Самовывоз осуществляется по адресу: Республика Беларусь, Гродненская область, Гродненский район, Одельский сельсовет, д. Подлипки, строение 7 в рабочие дни с 8:30 до 17:00</p>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
