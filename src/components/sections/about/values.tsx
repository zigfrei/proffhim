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
            <div className='w-full flex items-start gap-2'>
              <QualityIcon className='w-20 h-20 shrink-0 text-base-black' />
              <p className='typo-b3 text-base-black'>
                Мы стремимся предоставлять нашим клиентам продукцию высочайшего
                качества, соответствующую международным стандартам.
              </p>
            </div>
          </div>

          <div className='w-full flex-1 flex flex-col self-stretch gap-2 base-frame p-4'>
            <h3 className='typo-h4'>Иновации</h3>
            <div className='w-full flex items-start gap-2'>
              <InnovationIcon className='w-20 h-20 shrink-0 text-base-black' />
              <p className='typo-b3 text-base-black'>
                Мы стремимся предоставлять нашим клиентам продукцию высочайшего
                качества, соответствующую международным стандартам.
              </p>
            </div>
          </div>
          <div className='w-full flex-1 flex flex-col self-stretch gap-2 base-frame p-4'>
            <h3 className='typo-h4'>Эко&shy;ло&shy;гич&shy;ность</h3>
            <div className='w-full flex items-start gap-2'>
              <EcoIcon className='w-20 h-20 shrink-0 text-base-black' />
              <p className='typo-b3 text-base-black'>
                Мы стремимся предоставлять нашим клиентам продукцию высочайшего
                качества, соответствующую международным стандартам.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
