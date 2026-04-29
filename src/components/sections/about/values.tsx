import {SectionBlockSmall} from '@/components/ui/section';
import QualityIcon from '@/assets/icons/about/quality.svg';
import InnovationIcon from '@/assets/icons/about/innovation.svg';
import EcoIcon from '@/assets/icons/about/ecology.svg';

export default function Values() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full typo-h2'>Наши ценности</h2>
        <div className='w-full flex-1 flex flex-col lg:flex-row items-stretch gap-4'>
          <div className='w-full flex-1 flex flex-col self-stretch gap-2 base-frame p-4'>
            <h3 className='typo-h4'>Качество</h3>
            <div className='w-full flex flex-col lg:flex-row items-start gap-2'>
              <QualityIcon className='w-20 h-20 shrink-0 text-base-black' />
              <p className='typo-b3 text-base-black'>
                Мы обеспечиваем стабильно высокое качество продукции благодаря более чем 25-летнему опыту, научному подходу к разработке рецептур и строгому контролю на всех этапах производства. Наши моющие и дезинфицирующие средства соответствуют современным санитарным требованиям и европейским стандартам, демонстрируя высокую эффективность даже в сложных производственных условиях.
              </p>
            </div>
          </div>

          <div className='w-full flex-1 flex flex-col self-stretch gap-2 base-frame p-4'>
            <h3 className='typo-h4'>Иновации</h3>
            <div className='w-full flex flex-col lg:flex-row items-start gap-2'>
              <InnovationIcon className='w-20 h-20 shrink-0 text-base-black' />
              <p className='typo-b3 text-base-black'>
                Мы постоянно совершенствуем технологии производства и составы продукции, объединяя практический опыт и научные разработки специалистов из Беларуси, России и наших западных партнёров. Использование современных формул и внедрение передовых решений позволяет нам создавать эффективные моющие средства, отвечающие актуальным требованиям промышленности и профессиональной санитарии.
              </p>
            </div>
          </div>
          <div className='w-full flex-1 flex flex-col self-stretch gap-2 base-frame p-4'>
            <h3 className='typo-h4'>Эко&shy;ло&shy;гич&shy;ность</h3>
            <div className='w-full flex flex-col lg:flex-row items-start gap-2'>
              <EcoIcon className='w-20 h-20 shrink-0 text-base-black' />
              <p className='typo-b3 text-base-black'>
                Мы уделяем особое внимание экологической безопасности продукции. Использование «зеленых» ПАВов растительного происхождения обеспечивает биоразлагаемость средств и минимальную нагрузку на окружающую среду. Наши продукты безопасны для персонала, эффективны при низких температурах и демонстрируют высокую эффективность даже в условиях повышенной жесткости воды.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
