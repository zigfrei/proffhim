import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';
import Image from 'next/image';

export default function Hero() {
  return (
    <SectionBlock wrapperClassName='relative overflow-hidden p-4! lg:p-12! h-[calc(100vh-76px)] min-h-[720px] xl:min-h-[850px]'>
      <div className='z-10 w-full flex-1 flex items-start justify-center gap-16'>
        <div className='w-full h-full flex flex-col items-start justify-start gap-4'>
          <p className='typo-b3 py-2 px-4 xl:p-0 bg-primary xl:bg-transparent text-base-black xl:text-secondary'>
            Сделано в Беларуси
          </p>
          <h1 className='text-[2rem] lg:text-[3rem] typo-h2 text-base-white xl:text-base-black'>
            Моющие и дезинфици&shy;рующие средства для предприятий и ферм
          </h1>
          <p className='typo-body border-l-[5px] border-primary pl-4 text-base-white xl:text-base-black'>
            ООО «ПроффХим» производит профессиональные решения для мойки и
            дезинфекции: пенные и беспенные, кислотные и щелочные составы — для
            оборудования, инвентаря и производственных помещений. Стабильный
            результат и соответствие высоким требованиям гигиены.
          </p>
          <BigLinkButton
            href='/kontakty/#obraschenie'
            className='mt-auto mb-8  lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center self-center lg:self-start'
          >
            Связаться с нами
          </BigLinkButton>
        </div>
        <div className='absolute inset-0 -z-10 w-full h-full xl:relative xl:z-auto xl:flex xl:items-center xl:justify-center'>
          <Image
            src='/hero.webp'
            alt='Профессиональные моющие и дезинфицирующие средства ПроффХим'
            fill
            sizes='(min-width: 1280px) 50vw, 100vw'
            className='object-cover xl:w-auto xl:h-auto xl:object-cover xl:base-frame-big'
            loading='eager'
            fetchPriority='high'
          />
          <div className='absolute inset-0 bg-black/40 xl:hidden' />
        </div>
      </div>
    </SectionBlock>
  );
}
