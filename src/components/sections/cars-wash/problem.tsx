import SectionBlock from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function Problem() {
  return (
    <SectionBlock>
      <div className='w-full flex-col flex items-stretch justify-stretch base-frame-big'>
        <div className='w-full flex items-center lg:items-start flex-col gap-4 bg-primary p-4 lg:p-8 border-b-[5px] border-base-black'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            Автомобильные загрязнения отличаются по составу и требуют разного
            подхода к очистке. Дорожная плёнка, масла, битум, нагар, минеральные
            отложения и следы жёсткой воды плохо удаляются универсальными
            составами, поэтому профессиональная автохимия должна подбираться под
            конкретную задачу.
          </h2>
        </div>
        <div className='w-full flex flex-col items-start gap-4 p-4 lg:p-8'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            Правильно подобранные моющие средства позволяют:
          </h2>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-primary'>
              <Icon
                icon='material-symbols:speed-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Ускорить процесс мойки</p>
              <p className='typo-b3'>
                Сокращать время очистки за счёт высокой моющей способности,
                устойчивой пены и эффективной работы с дорожными и
                эксплуатационными загрязнениями.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-base-white'>
              <Icon
                icon='material-symbols:auto-fix-high'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>
                Удалять сложные загрязнения без лишних усилий
              </p>
              <p className='typo-b3'>
                Использовать специализированные составы для масла, битума,
                нагара, дорожной плёнки и минеральных отложений.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-primary lg:bg-base-white'>
              <Icon
                icon='material-symbols:savings-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Снизить расход химии и воды</p>
              <p className='typo-b3'>
                Концентрированные формулы помогают сделать мойку более
                экономичной без потери качества.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-base-white lg:bg-primary'>
              <Icon
                icon='material-symbols:local-shipping-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Работать с разными типами транспорта</p>
              <p className='typo-b3'>
                Очищать кузов, двигатель, диски, тенты, прицепы и коммерческий
                транспорт в рамках одной линейки профессиональных средств.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
