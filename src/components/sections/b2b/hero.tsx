import SectionBlock from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';
import { CheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Hero() {
  return (
    <SectionBlock wrapperClassName='relative overflow-hidden p-4! lg:p-12! h-[calc(100vh-76px)] min-h-[780px]'>
      <div className='z-10 w-full flex-1 flex items-start justify-center gap-16'>
        <div className='w-full h-full flex flex-col items-start justify-start gap-4'>
          <h1 className='lg:hidden text-[2rem] typo-h2 text-base-white'>
            Контрактное произ&shy;водство моющих и дезинфи&shy;цирующих средств под вашим
            брендом
          </h1>
          <h1 className='hidden lg:block text-[2rem] lg:text-[4rem] typo-h2 text-base-white xl:text-base-black'>
            Контрактное производство моющих и дезинфицирующих средств под вашим
            брендом
          </h1>
          <p className='typo-body border-l-[5px] border-primary pl-4 text-base-white xl:text-base-black'>
            Контрактное производство бытовой химии под ключ — от рецептуры до
            регистрации
          </p>
          <div>
            <ul className='flex flex-col gap-2 text-base-white xl:text-base-black'>
              <li className='flex items-center gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Собственная лаборатория</p>
              </li>
              <li className='flex items-center gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Производство от 5 тонн</p>
              </li>
                            <li className='flex items-center gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Регистрация и декларации под клиента</p>
              </li>
                            <li className='flex items-center gap-2'>
                <div className='flex items-center justify-center p-1 rounded bg-quaternary'>
                  <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-white [&>path]:stroke-[2.5]' />
                </div>
                <p className='typo-h5'>Фасовка и готовый продукт</p>
              </li>
            </ul>
          </div>
          <BigLinkButton
            href='/kontakty/#obraschenie'
            className='mt-auto mb-8 lg:mt-4 lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center self-center lg:self-start'
          >
            Связаться с нами
          </BigLinkButton>
        </div>
        <div className='absolute inset-0 -z-10 w-full h-full xl:relative xl:z-auto xl:flex xl:items-center xl:justify-center'>
          <Image
            src='/b2b/hero.png'
            alt='Hero image'
            fill
            sizes='(min-width: 1280px) 50vw, 100vw'
            className='object-cover xl:w-auto xl:h-auto xl:object-cover xl:base-frame-big xl:grayscale'
          />
          <div className='absolute inset-0 bg-black/40 xl:hidden' />
        </div>
      </div>
    </SectionBlock>
  );
}
