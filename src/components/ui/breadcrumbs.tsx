import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

type BreadcrumbsProps = ComponentPropsWithoutRef<'nav'> & {
  breadcrumbs: Breadcrumb[];
};

export default function Breadcrumbs({
  breadcrumbs,
  className,
}: BreadcrumbsProps) {
  return (
    <nav aria-label='Breadcrumb' className={className}>
      <ol className='flex flex-wrap items-center justify-start gap-y-1 typo-b2 uppercase font-bold text-base-black'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active ? 'page' : undefined}
            className='inline-flex items-center'
          >
            <Link
              href={breadcrumb.href}
              className='inline hover:text-primary transition-colors duration-200 ease-in-out'
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 ? (
              <span className='mx-2 inline-block shrink-0'>{'>'}</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
