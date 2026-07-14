import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';
import { CheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Hero() {
  return (
    <SectionBlock wrapperClassName='relative overflow-hidden p-4! lg:p-12! h-[calc(100vh-76px)] min-h-[630px]'>
      <div className='z-10 w-full flex-1 flex items-start justify-center gap-16'>
        <div className='w-full h-full flex flex-col items-start justify-start gap-4'>
          <h1
            className='text-[1.5rem] min-[440px]:text-[1.7rem] lg:text-[2.2rem] typo-h2 text-base-white xl:text-base-black'
            aria-label='Моющие средства для молочной промышленности'
          >
            Моющие средства для молочной промыш&shy;ленности
          </h1>
          <p className='leading-tight! xl:leading-normal! lg:text-[1.2rem] typo-body border-l-[5px] border-primary pl-4 text-base-white xl:text-base-black'>
            Эффективная санитария оборудования: CIP, пенная мойка, дезинфекция. Подберите решения под ваше производство — от фермы до переработки:
          </p>
          <div>
            <ul className='flex flex-col gap-2 text-base-white xl:text-base-black'>
              <li className='flex items-center gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Удаление жиров, белков и молочного камня</p>
              </li>
              <li className='flex items-center gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Снижение микробной нагрузки</p>
              </li>
              <li className='flex items-center gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Совместимость с CIP и ручной мойкой</p>
              </li>
            </ul>
          </div>
          <BigLinkButton
            href='/kontakty/#obraschenie'
            className='mt-auto lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center self-center lg:self-start'
          >
            Связаться с нами
          </BigLinkButton>
        </div>
        <div className='absolute inset-0 -z-10 w-full h-full xl:relative xl:z-auto xl:flex xl:items-center xl:justify-center'>
          <Image
            src='/milk-production/hero.webp'
            alt='Моющие средства для молочной промышленности'
            fill
            loading='eager'
            fetchPriority='high'
            sizes='(min-width: 1280px) 50vw, 100vw'
            className='object-cover xl:w-auto xl:h-auto xl:object-cover xl:base-frame-big xl:grayscale'
          />
          <div className='absolute inset-0 bg-black/40 xl:hidden' />
        </div>
      </div>
    </SectionBlock>
  );
}
