import { SectionBlockSmall } from '@/components/ui/section';
import Image from 'next/image';

export default function Hero() {
  return (
    <SectionBlockSmall>
      <div className='w-full h-full flex-1 flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16'>
        <div className='w-full flex flex-col items-center justify-center gap-4 lg:gap-8'>
          <h1 aria-label='Условия работы с юридическими лицами' className='typo-h2!'>
            Условия работы с юриди&shy;ческими лицами
          </h1>
          <p className='typo-body border-l-[5px] border-primary pl-4 text-base-black'>
            ООО «ПроффХим» работает с юридическими лицами и ИП, поставляет продукцию для B2B-клиентов и сопровождает сделки полным комплектом документов. Основные условия сотрудничества, оплаты, отгрузки и документооборота согласовываются заранее в рамках коммерческого предложения и договора.
          </p>
        </div>
        <div className='relative w-full h-full flex items-stretch justify-center grayscale'>
          <Image
            src='/terms-of-cooperation/handshake.webp'
            alt='О компании ПроффХим'
            width={512}
            height={512}
            sizes='(min-width: 768px) 50vw, 100vw'
            className='w-full h-full object-cover base-frame-big z-10'
          />
          <div
            className='absolute hidden lg:block inset-[-50] pointer-events-none'
            style={{
              backgroundImage: `
                linear-gradient(to left, color-mix(in srgb, var(--color-base-black) 10%, transparent) 1px, transparent 1px),
                linear-gradient(to top, color-mix(in srgb, var(--color-base-black) 10%, transparent) 1px, transparent 1px),
                linear-gradient(to left, color-mix(in srgb, var(--color-base-black) 20%, transparent) 2px, transparent 2px),
                linear-gradient(to top, color-mix(in srgb, var(--color-base-black) 20%, transparent) 2px, transparent 2px)
              `,
              backgroundSize: '5px 5px, 5px 5px, 25px 25px, 25px 25px',
            }}
          />
        </div>
        <div
          className='absolute lg:hidden inset-0 pointer-events-none z-[-1]'
          style={{
            backgroundImage: `
                linear-gradient(to left, color-mix(in srgb, var(--color-base-black) 5%, transparent) 1px, transparent 1px),
                linear-gradient(to top, color-mix(in srgb, var(--color-base-black) 5%, transparent) 1px, transparent 1px),
                linear-gradient(to left, color-mix(in srgb, var(--color-base-black) 7%, transparent) 2px, transparent 2px),
                linear-gradient(to top, color-mix(in srgb, var(--color-base-black) 7%, transparent) 2px, transparent 2px)
              `,
            backgroundSize: '5px 5px, 5px 5px, 25px 25px, 25px 25px',
          }}
        />
      </div>
    </SectionBlockSmall>
  );
}
