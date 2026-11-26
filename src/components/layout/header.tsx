import Link from 'next/link';
import Image from 'next/image';
import { LinkButton } from '../ui/links';
import WinterLogo from '@/assets/icons/logo.svg';
import StandardLogo from '@/assets/icons/logo-old.svg';
import { winterDecorationsEnabled } from '@/components/winter/config';
import { HeaderNavLinks } from './header-nav-links';
import { type MenuItem } from './menu-item';
import { MobileMenu } from './mobile-menu';

const menuItems: MenuItem[] = [
  {
    href: '/produktsiya',
    label: 'Продукция',
  },
  {
    href: '/o-kompanii',
    label: 'О компании',
  },
  {
    href: '/kontakty',
    label: 'Контакты',
  },
  {
    href: '/resheniya',
    label: 'Наши решения',
  },
];

export function Header() {
  const Logo = winterDecorationsEnabled ? WinterLogo : StandardLogo;

  return (
    <header className='fixed top-0 z-50 w-full bg-main-background border-b-[4px] lg:border-b-[5px] border-base-black'>
      <div className='w-full p-4 lg:px-12 lg:py-0 h-19 lg:h-24 max-w-[1440px] flex items-center justify-between mx-auto'>
        <Link href='/' aria-label='На главную' className='inline-block'>
          <Logo className='w-[195px] h-[44px] lg:w-[320px] lg:h-[72px] transition-transform duration-300 ease-out hover:scale-105 cursor-pointer' />
        </Link>
        <nav className='hidden lg:flex items-center justify-center'>
          <HeaderNavLinks items={menuItems} />
        </nav>

        <div className='relative hidden lg:block'>
          <LinkButton href='/kontakty/#obraschenie'>
            Связаться
          </LinkButton>
          {winterDecorationsEnabled && (
            <>
              <Image
                src='/winter/snow-cap.webp'
                alt=''
                width={400}
                height={22}
                unoptimized
                className='pointer-events-none absolute -top-3 right-0 h-3.5 w-32 object-fill mask-l-from-45% mask-l-to-100%'
              />
              <Image
                src='/winter/branch.webp'
                alt=''
                width={192}
                height={124}
                unoptimized
                className='pointer-events-none absolute -top-4 -right-4 h-auto w-12'
              />
            </>
          )}
        </div>

        <div className='lg:hidden'>
          <MobileMenu items={menuItems} winterLogo={winterDecorationsEnabled} />
        </div>
      </div>
      {winterDecorationsEnabled && (
        <div
          aria-hidden='true'
          className="pointer-events-none absolute inset-x-0 -bottom-px h-2 bg-[url('/winter/snow-cap.webp')] bg-center bg-repeat-x bg-size-[clamp(10rem,25vw,24rem)_100%] lg:h-3"
        />
      )}
    </header>
  );
}
