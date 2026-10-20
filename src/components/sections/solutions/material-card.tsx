import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { MATERIAL_TYPES, type Material } from '@/features/materials/config';

export default function MaterialCard({ material }: { material: Material }) {
  return (
    <Link
      href={material.href}
      className='group flex h-full min-w-0 flex-col overflow-hidden base-frame bg-main-background focus-visible:outline-4 focus-visible:outline-offset-8 focus-visible:outline-base-black'
    >
      <div className='relative aspect-video w-full overflow-hidden border-b-[3px] border-base-black'>
        <Image
          src={material.image}
          alt={material.imageAlt}
          fill
          sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
          className='object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0 group-focus-visible:grayscale-0 motion-reduce:transition-none'
        />
      </div>
      <div className='flex flex-1 flex-col items-start gap-3 p-4 transition-colors duration-200 group-hover:bg-primary group-focus-visible:bg-primary motion-reduce:transition-none lg:p-6'>
        <span className='border-2 border-base-black bg-primary px-3 py-1 typo-h5'>
          {MATERIAL_TYPES[material.type]}
        </span>
        <h2 className='typo-h4 break-words'>{material.title}</h2>
        <p className='typo-b2'>{material.description}</p>
        {material.type === 'news' && material.publishedAt && (
          <time dateTime={material.publishedAt} className='typo-caption'>
            {new Date(material.publishedAt).toLocaleDateString('ru-RU', {
              timeZone: 'UTC',
            })}
          </time>
        )}
        <span className='mt-auto flex items-center gap-4 pt-4 typo-h5'>
          Читать <ArrowRightIcon aria-hidden='true' className='h-7 w-7' />
        </span>
      </div>
    </Link>
  );
}
