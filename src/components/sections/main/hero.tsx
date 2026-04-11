import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';
import Image from 'next/image';

export default function Hero() {
  return (
    <SectionBlock wrapperClassName='p-4! lg:p-12! h-[calc(100vh-76px)] min-h-[600px] bg-[url("/hero.png")] bg-black/40 bg-blend-multiply xl:bg-none xl:bg-transparent bg-cover bg-center bg-no-repeat'>
      <div className='w-full flex-1 flex items-start justify-center gap-16'>
        <div className='w-full h-full flex flex-col items-start justify-start gap-4'>
          <p className='typo-b3 py-2 px-4 xl:p-0 bg-primary xl:bg-transparent text-base-black xl:text-secondary'>
            Сделано в Беларуси
          </p>
          <h1 className='text-[1.75rem] lg:text-[4rem] typo-h2 text-base-white xl:text-base-black'>
            Ваш надежный партнер в мире чистоты
            <br /> От молочных ферм до промышленных предприятий
          </h1>
          <p className='typo-body border-l-[5px] border-primary pl-4 text-base-white xl:text-base-black'>
            Профессиональные моющие и дезинфицирующие средства «Профф». 20 лет
            совершенства, четкая логистика и стабильное европейское качество.
          </p>
          <BigLinkButton
            href='/contacts/#contact-us'
            className='mt-auto mb-8 lg:mt-4 lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center self-center lg:self-start'
          >
            Связаться с нами
          </BigLinkButton>
        </div>
        <div className='relative w-full h-full hidden xl:flex items-center justify-center '>
          <Image
            src='/hero.png'
            alt='Hero image'
            fill
            sizes='(min-width: 768px) 70vw, 100vw'
            className='w-auto h-auto object-cover base-frame-big'
          />
        </div>
      </div>
    </SectionBlock>
  );
}
