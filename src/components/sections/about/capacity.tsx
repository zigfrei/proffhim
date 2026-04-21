import { SectionBlockSmall } from '@/components/ui/section';

export default function Capacity() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-6 p-4 lg:p-8 base-frame bg-primary'>
        <h2 className='w-full typo-h3 text-xl! lg:text-4xl! '>Производственные мощности</h2>
        <div className='w-full flex flex-col items-start gap-4'>
          <div className='w-full flex flex-col items-start gap-2'>
            <p className='typo-h5 text-base-black'>Современное оборудование</p>
            <p className='typo-b2 text-base-black'>
              Наш завод оснащен современным оборудованием, что позволяет нам
              производить широкий ассортимент продукции с высокой эффективностью
              и качеством.
            </p>
          </div>

          <div className='w-full flex flex-col items-start gap-2'>
            <p className='typo-h5 text-base-black'>Объем производства</p>
            <p className='typo-b2 text-base-black'>
              Ежемесячно мы производим более 300 тонн продукции, что позволяет
              нам удовлетворять потребности наших клиентов и поддерживать
              стабильные поставки на рынке.
            </p>
          </div>

          <div className='w-full flex flex-col items-start gap-2'>
            <p className='typo-h5 text-base-black'>
              Собственная лаборатория контроля качества
            </p>
            <p className='typo-b2 text-base-black'>
              Наша лаборатория оснащена современным оборудованием для контроля
              качества, что гарантирует соответствие нашей продукции самым
              высоким стандартам.
            </p>
          </div>

          <div className='w-full flex flex-col items-start gap-2'>
            <p className='typo-h5 text-base-black'>
              Высокотех&shy;нологические процессы производства
            </p>
            <p className='typo-b2 text-base-black'>
              Мы используем передовые технологии и процессы производства, что
              позволяет нам обеспечивать высокое качество продукции и
              минимизировать воздействие на окружающую среду.
            </p>
          </div>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
