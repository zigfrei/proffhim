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
    <ul className='flex gap-8'>
      {items.map((item) => {
        const isActive = isMenuItemActive({ href: item.href, pathname });

        return (
          <li key={item.label}>
            <Link
              href={item.href}
              className={clsx(
                'typo-h5 pt-2 pb-1 px-2 border-b-[4px] transition-colors duration-200',
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