import SectionBlock from '@/components/ui/section';
import { Icon } from '@iconify/react';

export default function Problem() {
  return (
    <SectionBlock>
      <div className='w-full flex-col flex items-stretch justify-stretch base-frame-big'>
        <div className='w-full flex items-center lg:items-start flex-col gap-4 bg-primary p-4 lg:p-8 border-b-[5px] border-base-black'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            Состояние вымени и копыт напрямую влияет на здоровье животных,
            качество молока и стабильность работы фермы. Неправильная или
            нерегулярная обработка повышает риск мастита, трещин кожи, заражения
            и болезней копыт.
          </h2>
        </div>
        <div className='w-full flex flex-col items-start gap-4 p-4 lg:p-8'>
          <h2 className='w-full typo-h4 text-center lg:text-left'>
            Правильно подобранные зоогигиенические средства позволяют:
          </h2>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-primary'>
              <Icon
                icon='material-symbols:health-and-safety-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Снизить риск мастита и заболеваний копыт</p>
              <p className='typo-b3'>
                Регулярная обработка вымени до и после доения, а также применение копытных ванн помогают поддерживать здоровье животных и снижать риск распространённых проблем стада.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-base-white'>
              <Icon
                icon='material-symbols:clean-hands-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Поддерживать гигиену доильного процесса</p>
              <p className='typo-b3'>
                Средства для обработки вымени до доения помогают удалить загрязнения с кожи и сосков перед надеванием доильных стаканов.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-primary lg:bg-base-white'>
              <Icon
                icon='material-symbols:shield-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>Защищать кожу и ткани после доения</p>
              <p className='typo-b3'>
               Средства после доения помогают снизить сухость кожи, предупредить появление трещин и защитить вымя от заражения и загрязнения.
              </p>
            </div>

            <div className='p-2 base-frame flex flex-col items-start gap-2 bg-base-white lg:bg-primary'>
              <Icon
                icon='material-symbols:verified-outline'
                className='w-16 h-16 text-base-black'
              />
              <p className='typo-h5'>
                Стабилизировать качество молока и снизить потери
              </p>
              <p className='typo-b3'>
                Грамотная зоогигиеническая обработка помогает сократить риски, влияющие на качество молока и экономику хозяйства.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
