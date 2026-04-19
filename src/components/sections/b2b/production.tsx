import { SectionBlockSmall } from '@/components/ui/section';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Production() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full typo-h2'>Категории продукции</h2>
        <div className='w-full flex-1 flex flex-col lg:flex-row items-stretch gap-4'>
          <div className='w-full flex-1 flex flex-col self-stretch gap-2 base-frame p-4'>
            <Image
              src='/b2b/card1.png'
              alt=''
              width={300}
              height={300}
              className='w-auto h-auto object-cover border-[5px] border-base-black '
            />
            <h3 className='typo-h45'>Моющие средства</h3>
            <ul>
              <li className='flex items-center justify-start gap-2'>
                <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-black [&>path]:stroke-[2.5]' />
                <p className='typo-b3 text-base-black'>
                  для кухни (жир, печи, гриль)
                </p>
              </li>
              <li className='flex items-center justify-start gap-2'>
                <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-black [&>path]:stroke-[2.5]' />
                <p className='typo-b3 text-base-black'>для стекол и зеркал</p>
              </li>
              <li className='flex items-center justify-start gap-2'>
                <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-black [&>path]:stroke-[2.5]' />
                <p className='typo-b3 text-base-black'>для полов</p>
              </li>
            </ul>
          </div>

          <div className='w-full flex-1 flex flex-col self-stretch gap-2 base-frame p-4'>
            <Image
              src='/b2b/card2.png'
              alt=''
              width={300}
              height={300}
              className='w-auto h-auto object-cover border-[5px] border-base-black '
            />
            <h3 className='typo-h45'>Дезинфицирующие средства</h3>
            <ul>
              <li className='flex items-center justify-start gap-2'>
                <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-black [&>path]:stroke-[2.5]' />
                <p className='typo-b3 text-base-black'>для поверхностей</p>
              </li>
              <li className='flex items-center justify-start gap-2'>
                <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-black [&>path]:stroke-[2.5]' />
                <p className='typo-b3 text-base-black'>
                  для медицинских учреждений
                </p>
              </li>
              <li className='flex items-center justify-start gap-2'>
                <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-black [&>path]:stroke-[2.5]' />
                <p className='typo-b3 text-base-black'>
                  для пищевых производств
                </p>
              </li>
            </ul>
          </div>

          <div className='w-full flex-1 flex flex-col self-stretch gap-2 base-frame p-4'>
            <Image
              src='/b2b/card3.png'
              alt=''
              width={300}
              height={300}
              className='w-auto h-auto object-cover border-[5px] border-base-black '
            />
            <h3 className='typo-h45'>Специализированная химия</h3>
            <ul>
              <li className='flex items-center justify-start gap-2'>
                <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-black [&>path]:stroke-[2.5]' />
                <p className='typo-b3 text-base-black'>CIP-мойка</p>
              </li>
              <li className='flex items-center justify-start gap-2'>
                <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-black [&>path]:stroke-[2.5]' />
                <p className='typo-b3 text-base-black'>промышленная химия</p>
              </li>
              <li className='flex items-center justify-start gap-2'>
                <CheckIcon className='w-3 h-3 lg:h-5 lg:w-5 text-base-black [&>path]:stroke-[2.5]' />
                <p className='typo-b3 text-base-black'>
                  средства для клининга и HoReCa
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionBlockSmall>
  );
}
