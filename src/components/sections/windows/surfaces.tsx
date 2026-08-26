import BesedkaIcon from '@/assets/icons/windows/besedka.svg';
import PrivateIcon from '@/assets/icons/windows/private.svg';
import RestoranIcon from '@/assets/icons/windows/restoran.svg';
import SummerIcon from '@/assets/icons/windows/summer.svg';
import { SectionBlockSmall } from '@/components/ui/section';
import Image from 'next/image';

export default function Surfaces() {
  return (
    <SectionBlockSmall>
      <div className='mb-8 flex w-full flex-col items-start justify-center gap-4 lg:gap-8'>
        <h3 className='w-full typo-h3'>
          Одно средство для мягких окон на участке и в бизнесе
        </h3>

        <ul className='grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4'>
          <li className='base-frame grid min-h-[180px] min-w-0 grid-cols-[minmax(7rem,42%)_1fr] overflow-hidden bg-main-background sm:min-h-[200px] xl:min-h-[220px]'>
            <div className='flex min-w-0 flex-col items-start justify-between gap-4 p-3 sm:p-4'>
              <BesedkaIcon className='size-14 shrink-0 sm:size-16 xl:size-20' />
              <p className='typo-b2 leading-tight! tracking-normal!'>
                Беседки и веранды
              </p>
            </div>
            <div className='relative min-h-0'>
              <Image
                src='/windows/besedka.webp'
                alt='Мягкие окна в беседке и на веранде'
                fill
                sizes='(min-width: 1280px) 15vw, (min-width: 640px) 29vw, 58vw'
                className='object-cover'
              />
            </div>
          </li>

          <li className='base-frame grid min-h-[180px] min-w-0 grid-cols-[minmax(7rem,42%)_1fr] overflow-hidden bg-main-background sm:min-h-[200px] xl:min-h-[220px]'>
            <div className='flex min-w-0 flex-col items-start justify-between gap-4 p-3 sm:p-4'>
              <RestoranIcon className='size-14 shrink-0 sm:size-16 xl:size-20' />
              <p className='typo-b2 leading-tight! tracking-normal!'>
                Террасы ресторанов
              </p>
            </div>
            <div className='relative min-h-0'>
              <Image
                src='/windows/restoran.webp'
                alt='Мягкие окна на террасе ресторана'
                fill
                sizes='(min-width: 1280px) 15vw, (min-width: 640px) 29vw, 58vw'
                className='object-cover'
              />
            </div>
          </li>

          <li className='base-frame grid min-h-[180px] min-w-0 grid-cols-[minmax(7rem,42%)_1fr] overflow-hidden bg-main-background sm:min-h-[200px] xl:min-h-[220px]'>
            <div className='flex min-w-0 flex-col items-start justify-between gap-4 p-3 sm:p-4'>
              <SummerIcon className='size-14 shrink-0 sm:size-16 xl:size-20' />
              <p className='typo-b2 leading-tight! tracking-normal!'>
                Летние кафе
              </p>
            </div>
            <div className='relative min-h-0'>
              <Image
                src='/windows/summer.webp'
                alt='Мягкие окна в летнем кафе'
                fill
                sizes='(min-width: 1280px) 15vw, (min-width: 640px) 29vw, 58vw'
                className='object-cover'
              />
            </div>
          </li>

          <li className='base-frame grid min-h-[180px] min-w-0 grid-cols-[minmax(7rem,42%)_1fr] overflow-hidden bg-main-background sm:min-h-[200px] xl:min-h-[220px]'>
            <div className='flex min-w-0 flex-col items-start justify-between gap-4 p-3 sm:p-4'>
              <PrivateIcon className='size-14 shrink-0 sm:size-16 xl:size-20' />
              <p className='typo-b2 leading-tight! tracking-normal!'>
                Частные дома
              </p>
            </div>
            <div className='relative min-h-0'>
              <Image
                src='/windows/private.webp'
                alt='Мягкие окна в частном доме'
                fill
                sizes='(min-width: 1280px) 15vw, (min-width: 640px) 29vw, 58vw'
                className='object-cover'
              />
            </div>
          </li>
        </ul>
      </div>
    </SectionBlockSmall>
  );
}
