import SectionBlock from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function Problem() {
  return (
    <SectionBlock>
      <div className='w-full flex-col flex items-stretch justify-stretch base-frame-big'>
        <div className='w-full flex items-center lg:items-start flex-col gap-4 bg-primary p-4 lg:p-8 border-b-[5px] border-base-black'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            Выпечка и кондитерские изделия создают сложные белково‑жировые и
            нагаровые загрязнения. Даже небольшие отложения на оборудовании и в
            печах ухудшают внешний вид, вкус и безопасность продукции и повышают
            риск санитарных нарушений.
          </h2>
        </div>
        <div className='w-full flex flex-col items-start gap-4 p-4 lg:p-8'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            Правильно подобранные моющие средства позволяют:
          </h2>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-primary'>
              <Icon
                icon='material-symbols:verified-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Стабилизировать качество продукции</p>
              <p className='typo-b3'>
                Обеспечивать чистоту оборудования, печей и рабочих поверхностей,
                чтобы изделия сохраняли стабильный вкус, внешний вид и срок
                годности.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-base-white'>
              <Icon
                icon='material-symbols:trending-down'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Снизить потери и брак</p>
              <p className='typo-b3'>
                Уменьшать риск пригорания, посторонних запахов и повторных
                переделок из‑за загрязнённого оборудования, сокращать списания и
                жалобы.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-primary lg:bg-base-white'>
              <Icon
                icon='material-symbols:health-and-safety-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Соответствовать санитарным требованиям</p>
              <p className='typo-b3'>
                Поддерживать необходимый уровень гигиены производственных и
                вспомогательных помещений, проходить проверки без критических
                замечаний.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-base-white lg:bg-primary'>
              <Icon
                icon='material-symbols:finance'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Оптимизировать затраты на уборку</p>
              <p className='typo-b3'>
                Сокращать время и трудозатраты на мойку, снижать расход моющих
                средств за счёт правильного выбора химии и технологий.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
