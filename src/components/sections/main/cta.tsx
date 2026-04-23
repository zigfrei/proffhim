import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';

export default function CTA() {
  return (
    <SectionBlock>
      <div className='w-full flex flex-col lg:flex-row items-stretch justify-stretch gap-4 lg:gap-16 bg-primary base-frame-big'>
        <div className='w-full flex flex-col items-start justify-start gap-4 p-4 pb-0 lg:pl-16 lg:pr-0 lg:py-16'>
          <h2 className='w-full text-[1.4rem] sm:text-[1.5rem] lg:text-[3rem] typo-h3 text-center lg:text-left'>
            <span className='lg:block'>ГОТОВЫ К</span>{' '}
            <span>СОТРУДНИ&shy;ЧЕСТВУ?</span>
          </h2>
          <p className='typo-body text-center lg:text-left lg:border-l-[5px] lg:border-base-black lg:pl-4'>
            Мы принимаем вызовы любой сложности. Успех вашего бизнеса начинается
            с одного точного решения.
          </p>
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
