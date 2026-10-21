import ProductBottleViewer from '@/components/product-3d/product-bottle-viewer';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import FAQItem from '@/components/ui/faq-item';
import { LinkButton } from '@/components/ui/links';
import { PROFFITALL_CONTENT as content } from '@/features/materials/proffitall/content';
import ArticleText from './text';

const tocLabels = [
  'Хранение после тренировки',
  'Предварительная обработка',
  'Замачивание',
  'Температура стирки',
  'Дозировка средства',
  'Сушка',
];
const dosage = [
  ['Мягкая', 60, 85, 110],
  ['Средняя', 70, 95, 120],
  ['Жёсткая', 85, 105, 130],
] as const;

export default function ProffitallArticle() {
  return (
    <article className='mx-auto flex w-full max-w-[1440px] min-w-0 flex-col gap-8 px-4 py-8 lg:gap-12 lg:px-12 lg:py-12'>
      <header className='flex min-w-0 flex-col gap-8 border-b-[4px] border-base-black pb-8 lg:gap-10'>
        <div className='flex min-w-0 flex-col items-start gap-5'>
          <span className='typo-h5'>Советы по стирке</span>
          <h1 className='typo-h2 [overflow-wrap:anywhere]'>
            Как отстирать запах пота с одежды
          </h1>
          <p className='border-l-[5px] border-primary pl-4 typo-body'>
            6 простых приёмов для свежести спортивной формы и повседневных
            вещей.
          </p>
          <time dateTime='2026-10-21' className='typo-b2'>
            21 октября 2026
          </time>
        </div>
        <div className='relative aspect-video min-w-0 overflow-hidden base-frame-big'>
          <Image
            src='/solutions-cards/proffitall-anti.webp'
            alt='PROFFITALL «Антибактериальное» для стирки одежды'
            fill
            sizes='(min-width: 1440px) 1344px, (min-width: 1024px) calc(100vw - 96px), calc(100vw - 32px)'
            className='object-cover'
            preload
          />
        </div>
      </header>

      <div className='grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10'>
        <div className='flex min-w-0 flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <ArticleText blocks={content.intro} />
          </div>
          {content.steps.map((step, index) => (
            <section
              key={step.id}
              id={step.id}
              className='flex scroll-mt-28 items-start gap-4 lg:gap-6'
            >
              <span
                aria-hidden='true'
                className='flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-base-black bg-primary typo-h5 lg:h-14 lg:w-14'
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className='flex min-w-0 flex-col gap-3'>
                <h2 className='typo-h45'>{step.title}</h2>
                <ArticleText blocks={step.blocks} />
              </div>
            </section>
          ))}
        </div>
        <nav
          aria-label='Оглавление статьи'
          className='order-first min-w-0 border-[3px] border-base-black p-5 lg:sticky lg:top-28 lg:order-last'
        >
          <h2 className='mb-4 typo-h45'>В этой статье</h2>
          <ol className='divide-y-2 divide-base-black'>
            {content.steps.map((step, index) => (
              <li key={step.id}>
                <a
                  href={`#${step.id}`}
                  className='flex items-start gap-3 py-4 typo-b2 hover:underline focus-visible:underline'
                >
                  <span className='font-bold'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {tocLabels[index]}
                </a>
              </li>
            ))}
            <li>
              <a
                href='#application'
                className='block py-4 typo-b2 hover:underline'
              >
                Как применять PROFFITALL
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <section
        aria-labelledby='proffitall-title'
        className='grid min-w-0 overflow-hidden base-frame-big lg:grid-cols-[minmax(0,1fr)_35%]'
      >
        <div className='flex min-w-0 flex-col items-start gap-5 p-5 lg:p-8'>
          <h2 id='proffitall-title' className='typo-h3'>
            Просто постирайте
            <br />с PROFFITALL
          </h2>
          <h3 className='typo-h45'>
            «Антибактериальное» — средство для стирки
          </h3>
          <ArticleText blocks={content.cta} />
          <ul className='flex w-full flex-wrap gap-5 py-2 typo-b2'>
            {[
              [
                'material-symbols:local-laundry-service-outline',
                'Машинная стирка',
              ],
              ['material-symbols:soap-outline', 'Ручная стирка'],
              ['material-symbols:water-drop-outline', '1,4 л'],
            ].map(([icon, label]) => (
              <li key={label} className='flex items-center gap-2'>
                <Icon
                  icon={icon}
                  aria-hidden='true'
                  className='h-9 w-9 shrink-0'
                />
                {label}
              </li>
            ))}
          </ul>
          <LinkButton
            href='/products/labels/profitall_anti.jpg'
            target='_blank'
            rel='noopener noreferrer'
            className='justify-center text-center lg:typo-h5'
          >
            Этикетка
          </LinkButton>
        </div>
        <div className='flex min-w-0 items-stretch justify-center bg-primary p-4 lg:p-6'>
          <ProductBottleViewer />
        </div>
      </section>

      <section
        aria-labelledby='application'
        className='flex min-w-0 flex-col gap-5'
      >
        <h2 id='application' className='scroll-mt-28 typo-h3'>
          Как применять
        </h2>
        <ArticleText blocks={content.product} />
        <ArticleText blocks={content.productSections[0].blocks} />
        <div className='w-full overflow-x-auto'>
          <table className='w-full border-collapse text-center text-sm sm:text-base lg:typo-b2'>
            <caption className='mb-3 text-left font-bold'>
              Рекомендуемые дозировки, мл — на 4–5 кг белья или 10 л воды
            </caption>
            <thead className='bg-primary'>
              <tr>
                {[
                  'Жёсткость воды',
                  'Лёгкое загрязнение',
                  'Среднее загрязнение',
                  'Сильное загрязнение',
                ].map((heading) => (
                  <th
                    key={heading}
                    scope='col'
                    className='border-2 border-base-black p-2 sm:p-3'
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dosage.map(([water, ...values]) => (
                <tr key={water}>
                  <th
                    scope='row'
                    className='border-2 border-base-black p-2 font-normal'
                  >
                    {water}
                  </th>
                  {values.map((value, i) => (
                    <td key={i} className='border-2 border-base-black p-2'>
                      {value} мл
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ArticleText blocks={content.productSections[1].blocks} />
      </section>
      <div className='flex flex-col gap-4'>
        {content.productSections.slice(2).map((section) => (
          <FAQItem
            key={section.title}
            question={section.title}
            answer={section.blocks.map((block) =>
              block.type === 'list' ? block.items.map((item) => `• ${item}`).join('\n') : block.text.replace(/\*\*/g, ''),
            ).join('\n\n')}
            className='bg-main-background! [&_p]:whitespace-pre-line'
          />
        ))}
      </div>
      <Link
        href='/resheniya?type=article'
        className='self-start border-b-2 border-base-black pb-1 typo-h5 hover:border-primary'
      >
        ← Все статьи
      </Link>
    </article>
  );
}
