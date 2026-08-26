import { BigLinkButton } from '@/components/ui/links';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative flex h-[calc(100dvh-76px)] min-h-[512px] w-full items-center justify-center overflow-hidden lg:h-[calc(100dvh-96px)]'>
      <Image
        src='/windows/hero-mobile.webp'
        alt='Мягкие окна'
        fill
        fetchPriority='high'
        sizes='100vw'
        className='object-cover md:hidden'
      />
      <Image
        src='/windows/hero.webp'
        alt='Мягкие окна'
        fill
        fetchPriority='high'
        sizes='100vw'
        className='hidden object-cover md:block'
      />

      <div className='relative z-10 flex w-full max-w-[1440px] flex-col items-center justify-center px-4 py-6 lg:px-12 lg:py-12'>
        <div className='flex h-full w-full flex-1 flex-col items-start justify-center gap-8 lg:flex-row lg:gap-16'>
          <div className='flex w-full flex-col items-center justify-center gap-4 lg:gap-8'>
            <h1
              aria-label='Профф SHKLO для мягких окон'
              className='typo-h2! text-base-white [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]'
            >
              Профф SHKLO для мягких окон
            </h1>
            <p className='typo-body border-l-[5px] border-primary pl-4 text-base-white [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]'>
              Специальное средство для очистки мягких окон, ПВХ-штор и гибкого стекла. Удаляет повседневную грязь, следы дождя и отпечатки, а антистатический эффект помогает поверхности дольше оставаться чистой.
            </p>
            <BigLinkButton
              href='/kontakty/#obraschenie'
              className='mt-4 w-full max-w-[420px] justify-center self-center lg:w-auto lg:max-w-none lg:self-start'
            >
              Связаться с нами
            </BigLinkButton>
          </div>
          <div className='hidden w-full lg:block' aria-hidden='true' />
        </div>
      </div>
    </section>
  );
}
