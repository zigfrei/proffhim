import { SectionBlockSmall } from '@/components/ui/section';
import { BigLinkButton } from '@/components/ui/links';
import Image from 'next/image';
import {
  LightBulbIcon,
  GlobeAltIcon,
  IdentificationIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';

export default function Model() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full typo-h2'>Бизнес-модель</h2>
        <div className='w-full flex flex-col lg:flex-row items-stretch justify-start gap-4'>
          <div className='w-full flex flex-col items-center justify-start gap-4 bg-primary border-[4px] border-black p-4 lg:p-6'>
            <h3 className='typo-h3 text-base-black text-center'>
              Private Label
              <br />
              (СТМ)
            </h3>
            <div className='text-center lg:text-left w-full flex flex-col items-start justify-start gap-2'>
              <p className='typo-h4 text-base-black'>
                Разработка уникальной продукции под ваш бренд:
              </p>
              <div className='w-full flex items-center justify-center lg:justify-start gap-2'>
                <LightBulbIcon className='w-5 h-5 lg:h-6 lg:w-6 text-base-black [&>path]:stroke-[2]' />
                <p className='typo-body uppercase text-base-black w-min min-[395px]:w-auto'>
                  Индивидуальная рецептура
                </p>
              </div>

              <div className='w-full flex items-center justify-center lg:justify-start gap-2'>
                <GlobeAltIcon className='w-5 h-5 lg:h-6 lg:w-6 text-base-black [&>path]:stroke-[2]' />
                <p className='typo-body uppercase text-base-black'>
                  Эксклюзивность
                </p>
              </div>

              <div className='w-full flex items-center justify-center lg:justify-start gap-2'>
                <IdentificationIcon className='w-5 h-5 lg:h-6 lg:w-6 text-base-black [&>path]:stroke-[2]' />
                <p className='typo-body uppercase text-base-black'>
                  Регистрация на клиента
                </p>
              </div>
            </div>
            <Image
              src='/b2b/private-label.png'
              alt=''
              width={300}
              height={200}
              sizes='(min-width: 768px) 50vw, 100vw'
              className='w-full h-auto object-cover base-frame'
            />
            <BigLinkButton
              href='/kontakty/#obraschenie'
              className='mt-auto mb-8 lg:mt-4 lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center self-center '
            >
              свой брэнд
            </BigLinkButton>
          </div>
          <div className='w-full flex flex-col items-center justify-start gap-4 bg-base-black border-[4px] border-primary p-4 lg:p-6'>
            <h3 className='typo-h3 text-primary text-center'>
              White Label
              <br />
              (Готовые решения)
            </h3>
            <div className='text-center lg:text-left w-full flex flex-col items-start justify-start gap-2'>
              <p className='typo-h4 text-primary w-full'>Быстрый запуск:</p>
              <div className='w-full flex items-center justify-center lg:justify-start gap-2'>
                <ClipboardDocumentListIcon className='w-5 h-5 lg:h-6 lg:w-6 text-primary [&>path]:stroke-[2]' />
                <p className='typo-body uppercase text-primary'>
                  Готовые рецептуры
                </p>
              </div>

              <div className='w-full flex items-center justify-center lg:justify-start gap-2'>
                <ClockIcon className='w-5 h-5 lg:h-6 lg:w-6 text-primary [&>path]:stroke-[2]' />
                <p className='typo-body uppercase text-primary'>
                  Минимальные сроки
                </p>
              </div>

              <div className='w-full flex items-center justify-center lg:justify-start gap-2'>
                <CircleStackIcon className='w-5 h-5 lg:h-6 lg:w-6 text-primary [&>path]:stroke-[2]' />
                <p className='typo-body uppercase text-primary'>
                  Снижение затрат
                </p>
              </div>
            </div>
            <Image
              src='/b2b/white-label.png'
              alt=''
              width={300}
              height={200}
              sizes='(min-width: 768px) 50vw, 100vw'
              className='w-full h-auto object-cover base-frame border-primary! shadow-[5px_5px_0_0_var(--color-primary)]! mt-auto'
            />
            <BigLinkButton
              href='/kontakty/#obraschenie'
              className='mt-auto mb-8 lg:mt-4 lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center self-center bg-base-black! text-primary! border-primary! shadow-[5px_5px_0_0_var(--color-primary)]! hover:shadow-[4px_4px_0_0_var(--color-primary)]! '
            >
              готовое решение
            </BigLinkButton>
          </div>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
