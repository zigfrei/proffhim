import { SectionBlockSmall } from '@/components/ui/section';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Model() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full typo-h2'>Бизнес-модель</h2>

      </div>
    </SectionBlockSmall>
  );
}