import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';

export default function CTA() {
  return (
    <SectionBlock>
      <div className='w-full flex flex-col lg:flex-row items-stretch justify-stretch gap-4 lg:gap-16 bg-primary base-frame-big'>
        <div className='w-full flex flex-col items-start justify-start gap-4 p-4 pb-0 lg:pl-16 lg:pr-0 lg:py-16'>
          <h2 className='w-full text-[1.4rem] sm:text-[1.5rem] lg:text-[2rem] typo-h3 text-center lg:text-left'>
            Мы обеспечиваем не только производство бытовой химии, но и полное сопровождение продукции
          </h2>
          <div className='typo-body text-left lg:border-l-[5px] lg:border-base-black lg:pl-4'>
            <p>&mdash;&nbsp;разработка рецептур в&nbsp;собственной лаборатории</p>
            <p>&mdash;&nbsp;тестирование и&nbsp;подбор состава</p>
            <p>&mdash;&nbsp;подготовка деклараций соответствия</p>
            <p>&mdash;&nbsp;сопровождение регистрации дезинфицирующих средств</p>
            <p>&mdash;&nbsp;соответствие требованиям ЕАЭС, РФ&nbsp;и&nbsp;РБ</p>
          </div>
        </div>
        <div className='self-stretch lg:bg-base-black flex items-center justify-center px-4'>
          <BigLinkButton
            href='/kontakty/#obraschenie'
            className='mb-4 lg:mb-0 lg:!border-base-white lg:shadow-[8px_8px_0_0_var(--color-base-white)]! lg:hover:shadow-[7px_7px_0_0_var(--color-base-white)]! text-center  bg-secondary!'
          >
            Связаться с нами
          </BigLinkButton>
        </div>
      </div>
    </SectionBlock>
  );
}
