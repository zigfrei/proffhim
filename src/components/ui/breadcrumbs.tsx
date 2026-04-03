import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label='Breadcrumb'>
      <ol className='flex items-center justify-start typo-b2 uppercase font-bold text-base-black'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active ? 'page' : undefined}
          >
            <Link
              href={breadcrumb.href}
              className='hover:text-primary transition-colors duration-200 ease-in-out'
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 ? (
              <span className='mx-2 inline-block'>{'>'}</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
