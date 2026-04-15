import Link from 'next/link';
import { LinkButton } from '../ui/links';
import Logo from '@/assets/icons/logo.svg';
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
];

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full bg-main-background border-b-[4px] lg:border-b-[5px] border-base-black'>
      <div className='w-full p-4 lg:px-12 lg:py-0 h-19 lg:h-24 max-w-[1440px] flex items-center justify-between mx-auto'>
        <Link href='/' aria-label='На главную' className='inline-block'>
          <Logo className='w-[195px] h-[44px] lg:w-[320px] lg:h-[72px] transition-transform duration-300 ease-out hover:scale-105 cursor-pointer' />
        </Link>
        <nav className='hidden lg:flex items-center justify-center'>
          <HeaderNavLinks items={menuItems} />
        </nav>

        <LinkButton href='/kontakty/#obraschenie' className='px-6 py-2 hidden lg:flex'>
          Связаться
        </LinkButton>

        <div className='lg:hidden'>
          <MobileMenu items={menuItems} />
        </div>
      </div>
    </header>
  );
}
