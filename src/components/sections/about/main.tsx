import { SectionBlockSmall } from '@/components/ui/section';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <SectionBlockSmall>
      <div className='w-full h-full flex-1 flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16'>
        <div className='w-full flex flex-col items-center justify-center gap-4 lg:gap-8'>
          <h1 className='typo-h2!'>О Компании ПроффХим</h1>
          <p className='typo-body border-l-[5px] border-primary pl-4 text-base-black'>
            Компания &laquo;ООО ПроффХим&raquo; производит моющие
            и&nbsp;чистящие, кислотные и&nbsp;щелочные моющие средства для
            решения широкого спектра производственных задач.
          </p>
          <p className='typo-b2'>
            Профессиональные моющие и&nbsp;дезинфицирующие средства торговой
            марки &laquo;Профф&raquo;&nbsp;&mdash; это результат многолетней
            работы наших специалистов, ученых Беларуси, России и&nbsp;Швеции.
            Более 20&nbsp;лет назад разработанные рецептуры за&nbsp;эти годы
            практического опыта на&nbsp;рынке, учитывая современные требования
            санитарии предприятий, доведены до&nbsp;совершенства по&nbsp;своим
            моющим и&nbsp;дезинфицирующим способностям. Содержание
            в&nbsp;составе препаратов &laquo;зеленых&raquo; ПАВов (то&nbsp;есть
            поверхностно-активных веществ растительного происхождения)
            обеспечивает минимальную экологическую нагрузку на&nbsp;всех
            участников процесса санитарии&nbsp;&mdash; от&nbsp;специалиста мойки
            до&nbsp;объектов окружающей среды.
          </p>
        </div>
        <div className='relative w-full h-full flex items-stretch justify-center grayscale'>
          <Image
            src='/about.png'
            alt='О компании ПроффХим'
            width={512}
            height={512}
            sizes='(min-width: 768px) 50vw, 100vw'
            className='w-full h-full object-cover base-frame-big z-10'
          />
          <div
            className='absolute hidden lg:block inset-[-50] pointer-events-none'
            //       style={{
            //         backgroundImage: 'radial-gradient(circle, var(--color-base-black) 1px, transparent 1px)',
            // //             backgroundImage: `
            // //   linear-gradient(to right, var(--color-base-black) 1px, transparent 0.1px),
            // //   linear-gradient(to bottom, var(--color-base-black) 1px, transparent 0.1px)
            // // `,
            //         backgroundSize: '5px 5px',
            //         opacity: 0.2,
            //       }}
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
