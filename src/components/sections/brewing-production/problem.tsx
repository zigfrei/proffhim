import SectionBlock from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function Problem() {
  return (
    <SectionBlock>
      <div className='w-full flex-col flex items-stretch justify-stretch base-frame-big'>
        <div className='w-full flex items-center lg:items-start flex-col gap-4 bg-primary p-4 lg:p-8 border-b-[5px] border-base-black'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            В пивоваренной и безалкогольной отрасли технологические процессы
            сопровождаются интенсивным ростом микроорганизмов. Любые нарушения
            санитарии приводят к порче продукта, нестабильному вкусу и рискам
            для потребителя.
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
                Обеспечивать чистоту варочных, бродильных и ёмкостных систем,
                чтобы вкус, аромат и стабильность напитков оставались
                неизменными от партии к партии.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-base-white'>
              <Icon
                icon='material-symbols:trending-down'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Снизить потери и брак</p>
              <p className='typo-b3'>
                Сокращать количество выбракованных партий из‑за пивного камня,
                отложений или микробиологии, снижать расходы на переделку и слив
                готового продукта.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-primary lg:bg-base-white'>
              <Icon
                icon='material-symbols:health-and-safety-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Соответствовать санитарным требованиям</p>
              <p className='typo-b3'>
                Поддерживать санитарное состояние оборудования и цехов на уровне
                требований регламентов и стандартов качества, уверенно проходить
                проверки.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-base-white lg:bg-primary'>
              <Icon
                icon='material-symbols:finance'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>
                Оптимизировать затраты на санитарную обработку
              </p>
              <p className='typo-b3'>
                Экономить моющие средства, воду и энергоресурсы за счёт
                правильного подбора химии и схем мойки (CIP/ручная/внешняя
                обработка), уменьшать время простоя оборудования.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
