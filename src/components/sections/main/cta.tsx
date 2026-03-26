import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';

export default function CTA() {
  return (
    <SectionBlock>
      <div className='w-full flex items-stretch justify-stretch gap-16 bg-primary base-frame-big'>
        <div className='w-full flex flex-col items-start justify-start gap-4 pl-16 py-16'>
          <h2 className='typo-h2'>ГОТОВЫ К СОТРУДНИЧЕСТВУ?</h2>
          <p className='typo-body border-l-[5px] border-base-black pl-4'>
            Мы принимаем вызовы любой сложности. Ваш индустриальный успех
            начинается с одного точного решения.
          </p>
        </div>
        <div className='self-stretch bg-base-black flex items-center justify-center px-4'>
          <BigLinkButton href='/#' className='!border-base-white shadow-[8px_8px_0_0_var(--color-base-white)]! hover:shadow-[7px_7px_0_0_var(--color-base-white)]! text-center bg-secondary!' >
            Связаться с нами
          </BigLinkButton>
        </div>
      </div>
    </SectionBlock>
  );
}
