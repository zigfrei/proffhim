import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';

export default function CTA() {
  return (
    <SectionBlock>
      <div className='w-full flex flex-col lg:flex-row items-stretch justify-stretch gap-4 lg:gap-16 bg-primary base-frame-big'>
        <div className='w-full flex flex-col items-start justify-start gap-4 p-4 pb-0 lg:pl-16 lg:pr-0 lg:py-16'>
          <h2 className='w-full typo-h3 text-center lg:text-left'>
           Профф SHKLO для мягких окон
          </h2>
          <p className='typo-body text-center lg:text-left lg:border-l-[5px] lg:border-base-black lg:pl-4'>
            Для регулярного ухода за мягкими окнами: удаляет загрязнения, поддерживает прозрачность ПВХ-плёнки и помогает уменьшить налипание пыли.
          </p>
        </div>
        <div className='self-stretch lg:bg-base-black flex items-center justify-center px-4'>
          <BigLinkButton
            href='/kontakty/#obraschenie'
            className='mb-4 lg:mb-0 lg:!border-base-white lg:shadow-[8px_8px_0_0_var(--color-base-white)]! lg:hover:shadow-[7px_7px_0_0_var(--color-base-white)]! text-center  bg-secondary!'
          >
            Запросить цену для опта
          </BigLinkButton>
        </div>
      </div>
    </SectionBlock>
  );
}
