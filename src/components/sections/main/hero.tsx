import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';
import Image from 'next/image';

export default function Hero() {
  return (
    <SectionBlock wrapperClassName='p-4! lg:p-12! h-[calc(100vh-76px)] min-h-[720px] bg-[url("/hero.png")] bg-black/40 bg-blend-multiply xl:bg-none xl:bg-transparent bg-cover bg-center bg-no-repeat'>
      <div className='w-full flex-1 flex items-start justify-center gap-16'>
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
