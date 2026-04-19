'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isMenuItemActive, type MenuItem } from './menu-item';

interface HeaderNavLinksProps {
  items: MenuItem[];
}

export function HeaderNavLinks({ items }: HeaderNavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className='flex items-center justify-center flex-wrap gap-2 gap-y-0!'>
      {items.map((item) => {
        const isActive = isMenuItemActive({ href: item.href, pathname });

        return (
          <li key={item.label} className='h-full flex items-center justify-center'>
            <Link
              href={item.href}
              className={clsx(
                'h-full text-center typo-h6 xl:typo-h5 pt-2 pb-1 px-2 border-b-[4px] transition-colors duration-200 whitespace-pre-line',
                isActive
                  ? 'border-base-black bg-base-black text-primary'
                  : 'border-transparent hover:border-base-black',
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}