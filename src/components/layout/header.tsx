import Link from 'next/link';
import { LinkButton } from '../ui/links';
import Logo from '@/assets/icons/logo.svg';

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full bg-main-background border-b-[5px] border-base-black'>
      <div className='w-full px-12 h-24 max-w-[1440px] flex items-center justify-between mx-auto'>
        <Link href='/' aria-label='На главную' className='inline-block'>
          <Logo className='w-[320px] h-[72px] transition-transform duration-300 ease-out hover:scale-105 cursor-pointer' />
        </Link>
        <nav>
          <ul className='flex gap-8'>
            <li>
              <Link href='/#' className='typo-h5 text-base-black/70 hover:text-base-black transition-colors duration-200'>
                Продукция
              </Link>
            </li>
            <li>
              <Link href='/#' className='typo-h5 text-base-black/70 hover:text-base-black transition-colors duration-200'>
                О компании
              </Link>
            </li>
            <li>
              <Link href='/#' className='typo-h5 text-base-black/70 hover:text-base-black transition-colors duration-200'>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <LinkButton href='/#' className='px-6 py-2'>
          Связаться
        </LinkButton>
      </div>
    </header>
  );
}
