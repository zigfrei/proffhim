import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';
import Image from 'next/image';

export default function Hero() {
  return (
    <SectionBlock wrapperClassName='!pt-12'>
      <div className='w-full flex items-start justify-center gap-16'>
        <div className='w-full flex flex-col items-start justify-start gap-4'>
          <p className='typo-b3 text-secondary'>Сделано в Беларуси</p>
          <h1 className='typo-h2'>
            Ваш надежный партнер в мире чистоты<br /> От молочных ферм до
            промышленных предприятий
          </h1>
          <p className='typo-body border-l-[5px] border-primary pl-4'> 
            Профессиональные моющие и дезинфицирующие средства «Профф». 20 лет
            совершенства, четкая логистика и стабильное европейское качество.
          </p>
          <BigLinkButton href='/#' className='mt-4'>
            Связаться с нами
          </BigLinkButton>
        </div>
        <div className='w-full flex items-center justify-center'>
          <Image
            src='/hero.png'
            alt='Hero image'
            width={1024}
            height={1024}
            className='w-auto h-auto base-frame-big'
          />
        </div>
      </div>
    </SectionBlock>
  );
}
