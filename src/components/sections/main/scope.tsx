import SectionBlock from '@/components/ui/section';
import Image from 'next/image';
import type { ComponentType, SVGProps } from 'react';
import CowIcon from '@/assets/icons/scope/cow.svg';
import MilkIcon from '@/assets/icons/scope/milk.svg';
import MeatIcon from '@/assets/icons/scope/meat.svg';
import ChickenIcon from '@/assets/icons/scope/chicken.svg';
import FishIcon from '@/assets/icons/scope/fish.svg';
import SugarIcon from '@/assets/icons/scope/sugar.svg';
import AlcoholIcon from '@/assets/icons/scope/alcohol.svg';
import BreadIcon from '@/assets/icons/scope/bread.svg';
import BarnIcon from '@/assets/icons/scope/barn.svg';
import FactoryIcon from '@/assets/icons/scope/factory.svg';

interface ScopeItem {
  number: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const MOBILE_BG_CLASSES = [
  'bg-primary',
  'bg-base-white',
  'bg-primary',
  'bg-main-background',
] as const;

const SCOPE_ITEMS: ScopeItem[] = [
  {
    number: '01.',
    title: 'Молочная отрасль',
    imageSrc: '/scope/milk.png',
    icon: MilkIcon,
  },
  {
    number: '02.',
    title: 'Мясная отрасль',
    imageSrc: '/scope/meat.png',
    icon: MeatIcon,
  },
  {
    number: '03.',
    title: 'Переработка птицы',
    imageSrc: '/scope/chicken.png',
    icon: ChickenIcon,
  },
  {
    number: '07.',
    title: 'Рыбная отрасль',
    imageSrc: '/scope/fish.png',
    icon: FishIcon,
  },
  {
    number: '05.',
    title: 'Сахарная отрасль',
    imageSrc: '/scope/sugar.png',
    icon: SugarIcon,
  },
  {
    number: '06.',
    title: 'Ликероводочная, пивоваренная и безалкогольная отрасль',
    imageSrc: '/scope/brewing.png',
    icon: AlcoholIcon,
  },
  {
    number: '04.',
    title: 'Хлебобулочная и кондитерская отрасль',
    imageSrc: '/scope/cake.png',
    icon: BreadIcon,
  },
  {
    number: '08.',
    title: 'Агро-промышленные предприятия',
    imageSrc: '/scope/farm.png',
    icon: BarnIcon,
  },
  {
    number: '09.',
    title: 'Молочно-товарные фермы',
    imageSrc: '/scope/cow.png',
    icon: CowIcon,
  },
  {
    number: '10.',
    title: 'Ж/д составы, объекты промышленных предприятий',
    imageSrc: '/scope/train.png',
    icon: FactoryIcon,
  },
];

function ScopeItemIcon({
  item,
  className,
}: {
  item: ScopeItem;
  className: string;
}) {
  const Icon = item.icon;

  return <Icon className={className} />;
}

export default function Scope() {
  return (
    <SectionBlock>
      <div className='w-full flex flex-col items-start justify-center gap-16'>
        <div
          className="
            w-full gap-4
            grid-cols-1
            hidden lg:grid
            lg:grid-cols-5
            lg:grid-rows-5
            lg:[grid-template-areas:'cell11_cell1_cell1_cell2_cell2''cell11_cell3_cell3_cell7_cell5''cell11_cell6_cell6_cell7_cell8''cell11_cell6_cell6_cell4_cell8''cell11_cell9_cell10_cell10_cell8']"
        >
          {/* cell 1 */}
          <div className='bg-base-white base-frame flex items-center justify-between p-2 lg:[grid-area:cell1] gap-4'>
            <ScopeItemIcon item={SCOPE_ITEMS[0]} className='w-22 h-22' />
            <div className='w-full flex flex-col items-start justify-start gap-1'>
              <span className='typo-h4'>{SCOPE_ITEMS[0].number}</span>
              <h3 className='typo-h5'>{SCOPE_ITEMS[0].title}</h3>
            </div>
            <div className='relative w-[20%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[0].imageSrc}
                alt={SCOPE_ITEMS[0].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
          {/* end cell 1 */}

          {/* cell 2 */}
          <div className='bg-base-white base-frame flex items-center justify-between p-2 lg:[grid-area:cell2] gap-4'>
            <div className='w-full flex flex-col items-start justify-start gap-1'>
              <span className='typo-h4'>{SCOPE_ITEMS[1].number}</span>
              <h3 className='typo-h5'>{SCOPE_ITEMS[1].title}</h3>
            </div>
            <ScopeItemIcon item={SCOPE_ITEMS[1]} className='w-20 h-20' />
            <div className='relative w-[20%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[1].imageSrc}
                alt={SCOPE_ITEMS[1].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
          {/* end cell 2 */}

          {/* cell 3 */}
          <div className='bg-base-white base-frame flex items-stretch justify-between p-2 lg:[grid-area:cell3] gap-4'>
            <div className='w-full flex flex-col items-start justify-between gap-1'>
              <div className='w-full flex items-start justify-between gap-2'>
                <span className='typo-h4'>{SCOPE_ITEMS[2].number}</span>
                <ScopeItemIcon item={SCOPE_ITEMS[2]} className='w-12 h-12' />
              </div>
              <h3 className='typo-h5'>{SCOPE_ITEMS[2].title}</h3>
              {SCOPE_ITEMS[2].subtitle && (
                <p className='typo-b2'>{SCOPE_ITEMS[2].subtitle}</p>
              )}
            </div>
            <div className='relative w-[20%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[2].imageSrc}
                alt={SCOPE_ITEMS[2].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
          {/* end cell 3 */}

          {/* cell 4 */}
          <div className='bg-base-white base-frame flex items-stretch justify-between p-2 lg:[grid-area:cell4] gap-4'>
            <div className='w-full flex flex-col items-start justify-between gap-1'>
              <div className='w-full flex items-start justify-between gap-2'>
                <span className='typo-h4'>{SCOPE_ITEMS[3].number}</span>
                <ScopeItemIcon item={SCOPE_ITEMS[3]} className='w-12 h-12' />
              </div>
              <h3 className='typo-h5 whitespace-normal break-words'>
                {SCOPE_ITEMS[3].title}
              </h3>
            </div>
            <div className='relative w-[20%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[3].imageSrc}
                alt={SCOPE_ITEMS[3].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
          {/* end cell 4 */}

          {/* cell 5 */}
          <div className='bg-base-white base-frame flex items-stretch justify-between p-2 lg:[grid-area:cell5] gap-4'>
            <div className='w-full flex flex-col items-start justify-between gap-1'>
              <div className='w-full flex items-start justify-between gap-2'>
                <span className='typo-h4'>{SCOPE_ITEMS[4].number}</span>
                <ScopeItemIcon item={SCOPE_ITEMS[4]} className='w-12 h-12' />
              </div>
              <h3 className='typo-h5 whitespace-normal break-words'>
                {SCOPE_ITEMS[4].title}
              </h3>
            </div>
            <div className='relative w-[20%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[4].imageSrc}
                alt={SCOPE_ITEMS[4].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
          {/* end cell 5 */}
          {/* cell 6 */}
          <div className='bg-base-white base-frame flex items-center justify-between p-2 lg:[grid-area:cell6] gap-4'>
            <ScopeItemIcon item={SCOPE_ITEMS[5]} className='w-30 h-30' />
            <div className='w-full flex flex-col items-start justify-start gap-1'>
              <span className='typo-h4'>{SCOPE_ITEMS[5].number}</span>
              <h3 className='typo-h5'>{SCOPE_ITEMS[5].title}</h3>
            </div>
            <div className='relative w-[20%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[5].imageSrc}
                alt={SCOPE_ITEMS[5].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
          {/* end cell 6 */}

          {/* cell 7 */}
          <div className='bg-primary base-frame flex flex-col items-stretch justify-between p-2 lg:[grid-area:cell7] gap-4'>
            <div className='w-full flex flex-col items-start justify-between gap-1'>
              <div className='w-full flex items-start justify-between gap-2'>
                <span className='typo-h4'>{SCOPE_ITEMS[6].number}</span>
                <ScopeItemIcon item={SCOPE_ITEMS[6]} className='w-12 h-12' />
              </div>
              <h3 className='typo-h5 whitespace-normal break-words'>
                {SCOPE_ITEMS[6].title}
              </h3>
            </div>
            <div className='relative w-full h-[40%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[6].imageSrc}
                alt={SCOPE_ITEMS[6].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>

          {/* cell 8 */}
          <div className='bg-base-white base-frame flex flex-col items-stretch justify-between p-2 lg:[grid-area:cell8] gap-4'>
            <div className='w-full flex flex-col items-start justify-between gap-1'>
              <div className='w-full flex items-start justify-between gap-2'>
                <span className='typo-h4'>{SCOPE_ITEMS[7].number}</span>
                <ScopeItemIcon item={SCOPE_ITEMS[7]} className='w-12 h-12' />
              </div>
              <h3 className='typo-h5 whitespace-normal break-words'>
                {SCOPE_ITEMS[7].title}
              </h3>
            </div>
            <div className='relative w-full h-[60%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[7].imageSrc}
                alt={SCOPE_ITEMS[7].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
          {/* end cell 8 */}

          {/* cell 9 */}
          <div className='bg-base-white base-frame flex items-stretch justify-between p-2 lg:[grid-area:cell9] gap-4'>
            <div className='w-full flex flex-col items-start justify-between gap-1'>
              <div className='w-full flex items-start justify-between gap-2'>
                <span className='typo-h4'>{SCOPE_ITEMS[8].number}</span>
                <ScopeItemIcon item={SCOPE_ITEMS[8]} className='w-12 h-12' />
              </div>
              <h3 className='typo-h5 whitespace-normal break-words'>
                {SCOPE_ITEMS[8].title}
              </h3>
            </div>
            <div className='relative w-[20%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[8].imageSrc}
                alt={SCOPE_ITEMS[8].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
          {/* end cell 9 */}

          {/* cell 10 */}
          <div className='bg-primary base-frame flex items-stretch justify-between p-2 lg:[grid-area:cell10] gap-4'>
            <div className='w-full flex flex-col items-start justify-between gap-1'>
              <div className='w-full flex items-start justify-between gap-2'>
                <span className='typo-h4'>{SCOPE_ITEMS[9].number}</span>
                <ScopeItemIcon item={SCOPE_ITEMS[9]} className='w-12 h-12' />
              </div>
              <h3 className='typo-h5 whitespace-normal break-words'>
                {SCOPE_ITEMS[9].title}
              </h3>
            </div>
            <div className='relative w-[20%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
              <Image
                src={SCOPE_ITEMS[9].imageSrc}
                alt={SCOPE_ITEMS[9].title}
                fill
                sizes='(min-width: 768px) 10vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
          {/* end cell 10 */}

          <div className='flex p-4 lg:[grid-area:cell11] bg-primary base-frame items-center justify-center'>
            <h2 className='typo-h2 lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed] lg:rotate-180'>
              Сфера
              <br />
              применения
            </h2>
          </div>
        </div>

        <div className='self-center w-full max-w-[550px] flex lg:hidden flex-col items-start justify-center gap-4'>
          <div className='w-full p-4 bg-primary base-frame flex items-center justify-center'>
            <h2 className='typo-h2'>Сфера применения</h2>
          </div>

          {SCOPE_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${MOBILE_BG_CLASSES[index % MOBILE_BG_CLASSES.length]} w-full w-min-0 base-frame flex items-center justify-between p-2 lg:[grid-area:cell1] gap-4`}
            >
              <ScopeItemIcon item={item} className='w-22 h-22' />
              <div className='w-full flex flex-col items-start justify-start gap-1'>
                <span className='typo-h4'>{item.number}</span>
                <h3 className='typo-h5 whitespace-normal'>{item.title}</h3>
              </div>
              <div className='relative w-[20%] shrink-0 self-stretch overflow-hidden border-2 border-base-black grayscale'>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes='(min-width: 768px) 10vw, 25vw'
                  className='object-cover'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}
