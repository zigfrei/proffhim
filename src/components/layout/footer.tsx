import Link from 'next/link';
import LogoBlack from '@/assets/icons/logo-black.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import VKIcon from '@/assets/icons/vkontakte.svg';

export function Footer() {

  return (
    <footer className='w-full bg-primary border-t-[5px] border-base-black'>
      <div className='w-full px-4 py-6 lg:px-12 lg:py-16 max-w-[1440px] flex flex-col items-start justify-start mx-auto'>
        <div className='flex flex-col lg:flex-row items-start justify-between mx-auto gap-4 lg:gap-16'>
          <div className='w-full flex flex-col items-start justify-start gap-4'>
            <Link href='/' aria-label='На главную'>
              <LogoBlack className='w-[250px] h-[56px] transition-transform duration-300 ease-out hover:scale-105 cursor-pointer' />
            </Link>
            <p className='typo-b3 text-left font-bold'>
              Белорусское качество. Европейские стандарты. Эффективные и
              безопасные решения для чистоты.
            </p>
          </div>
          <div className='w-full flex flex-col items-start justify-start gap-4'>
            <p className='typo-h5'>КОНТАКТЫ</p>
            <div className='flex flex-col items-start justify-start gap-2'>
              <p className='typo-b3 text-left font-bold'>
                Адрес: Беларусь, Гродненская область, Гродненский район,
                Одельский с/с, д. Подлипки, стр. 7
              </p>
              {/* <p className='typo-b3 text-left font-bold'>
                Телефон/факс: <a href='tel:+375152605277' className='hover:text-base-white transition-colors duration-200'>+375 152 605277</a>
              </p> */}
              <p className='typo-b3 text-left font-bold'>
                Выходные дни: <a href='tel:+375296729520' className='hover:text-base-white transition-colors duration-200'>+375 (29) 6729520</a>,
                <br /> <a href='tel:+375291060587' className='hover:text-base-white transition-colors duration-200'>+375 (29) 1060587</a>
              </p>
            </div>
          </div>
          <div className='w-full flex flex-col items-start justify-start gap-4'>
            <p className='typo-h5'>Ссылки</p>
            <nav>
              <ul className='flex flex-col items-start justify-start gap-2'>
                <li>
                  <Link
                    href='/products'
                    className='uppercase typo-b3 font-bold text-base-black inline-block border-b-[2px] border-transparent hover:border-base-black hover:text-base-black transition-[color,border-color] duration-200'
                  >
                    Продукция
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='uppercase typo-b3 font-bold text-base-black inline-block border-b-[2px] border-transparent hover:border-base-black hover:text-base-black transition-[color,border-color] duration-200'
                  >
                    О компании
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contacts'
                    className='uppercase typo-b3 font-bold text-base-black inline-block border-b-[2px] border-transparent hover:border-base-black hover:text-base-black transition-[color,border-color] duration-200'
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='w-full flex flex-col items-start justify-start gap-4'>
            <p className='typo-h5'>Социальные сети</p>
              <ul className='flex items-center justify-center gap-2'>
                <li>
                  <a
                    href='https://www.instagram.com/proffhim.by/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 flex items-center justify-center bg-base-black base-frame lg:base-frame-interactive'
                  >
                    <InstagramIcon className='w-6 h-6 inline-block text-white' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://vk.com/public182349785'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 flex items-center justify-center bg-base-black base-frame lg:base-frame-interactive'
                  >
                    <VKIcon className='w-6 h-6 inline-block text-white' />
                  </a>
                </li>
              </ul>
          </div>
        </div>
        <div className='w-full h-[2px] bg-base-black my-6 lg:mt-16 lg:mb-8'></div>
        <div className='w-full flex items-start lg:items-center justify-start gap-4'>
          <p className='typo-b3 lg:text-center font-bold'>
            © {new Date().getFullYear()} ООО «ПроффХим». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
