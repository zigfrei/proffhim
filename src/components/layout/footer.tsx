import Link from 'next/link';
import LogoBlack from '@/assets/icons/logo-black.svg';
// import InstagramIcon from '@/assets/icons/instagram.svg';
import TelegramIcon from '@/assets/icons/telegram.svg';
import MaxIcon from '@/assets/icons/max.svg';
import ViberIcon from '@/assets/icons/viber.svg';
import WhatsappIcon from '@/assets/icons/whatsapp.svg';
import { Icon } from '@iconify/react';
// import VKIcon from '@/assets/icons/vkontakte.svg';
// import TikTokIcon from '@/assets/icons/tiktok.svg';
// import FacebookIcon from '@/assets/icons/facebook.svg';
// import ThreadsIcon from '@/assets/icons/threads.svg';

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
                ООО «ПроффХим» УНП 591506904
              </p>
              <p className='typo-b3 text-left font-bold'>
                Адрес: Беларусь, Гродненская область, Гродненский район,
                Одельский сельсовет, д. Подлипки, строение 7
              </p>
              {/* <p className='typo-b3 text-left font-bold'>
                Телефон/факс: <a href='tel:+375152605277' className='hover:text-base-white transition-colors duration-200'>+375 152 605277</a>
              </p> */}
              <p className='typo-b3 text-left font-bold'>
                Телефоны:{' '}
                <a
                  href='tel:+375296729520'
                  className='hover:text-base-white transition-colors duration-200'
                >
                  +375 (29) 6729520
                </a>
                ,
                <br />{' '}
                <a
                  href='tel:+375291060587'
                  className='hover:text-base-white transition-colors duration-200'
                >
                  +375 (29) 1060587
                </a>
                ,{' '}
                <a
                  href='tel:+375152605277'
                  className='hover:text-base-white transition-colors duration-200'
                >
                  +375 (152) 605277
                </a>
                ,{' '}
                <a
                  href='tel:+375152605177'
                  className='hover:text-base-white transition-colors duration-200'
                >
                  +375 (152) 605177
                </a>
              </p>
              <div className='flex items-center justify-center gap-1'>
                <Icon
                  icon='material-symbols:mail'
                  className='w-4 h-4 text-base-black'
                />
                <a
                  href='mailto:proffhimsale@mail.ru'
                  className='typo-b3 hover:text-base-white transition-colors duration-200'
                >
                  proffhimsale@mail.ru
                </a>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col items-start justify-start gap-4'>
            <p className='typo-h5'>Ссылки</p>
            <nav>
              <ul className='flex flex-col items-start justify-start gap-2'>
                <li>
                  <Link
                    href='/kontraktnoe-proizvodstvo-moyushchih-i-dezinficiruyushchih-sredstv'
                    className='uppercase typo-b3 font-bold text-base-black inline-block border-b-[2px] border-transparent hover:border-base-black hover:text-base-black transition-[color,border-color] duration-200'
                  >
                    Контрактное производство
                  </Link>
                </li>
                <li>
                  <Link
                    href='/produktsiya'
                    className='uppercase typo-b3 font-bold text-base-black inline-block border-b-[2px] border-transparent hover:border-base-black hover:text-base-black transition-[color,border-color] duration-200'
                  >
                    Продукция
                  </Link>
                </li>
                <li>
                  <Link
                    href='/o-kompanii'
                    className='uppercase typo-b3 font-bold text-base-black inline-block border-b-[2px] border-transparent hover:border-base-black hover:text-base-black transition-[color,border-color] duration-200'
                  >
                    О компании
                  </Link>
                </li>
                <li>
                  <Link
                    href='/kontakty'
                    className='uppercase typo-b3 font-bold text-base-black inline-block border-b-[2px] border-transparent hover:border-base-black hover:text-base-black transition-[color,border-color] duration-200'
                  >
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sertifikaty'
                    className='uppercase typo-b3 font-bold text-base-black inline-block border-b-[2px] border-transparent hover:border-base-black hover:text-base-black transition-[color,border-color] duration-200'
                  >
                    Сертификаты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='w-full flex flex-col items-start justify-start gap-4'>
            <p className='typo-h5'>Мессенджеры</p>
            <ul className='flex items-center justify-center gap-2'>
              <li>
                <a
                  href='https://t.me/proffhim_ru'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 flex items-center justify-center bg-base-black base-frame lg:base-frame-interactive'
                >
                  <TelegramIcon className='w-6 h-6 inline-block text-white' />
                </a>
              </li>

              <li>
                <a
                  href='https://max.ru/u/f9LHodD0cOLTiT9h85Bj0wYC2qHqfeO2n7RAIZ4j7T7M6gtB3aIQQ4SJxsw'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 flex items-center justify-center bg-base-black base-frame lg:base-frame-interactive'
                >
                  <MaxIcon className='w-6 h-6 inline-block text-white' />
                </a>
              </li>

              <li>
                <a
                  href='viber://chat?number=%2B375292659068'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 flex items-center justify-center bg-base-black base-frame lg:base-frame-interactive'
                >
                  <ViberIcon className='w-6 h-6 inline-block text-white' />
                </a>
              </li>
              <li>
                <a
                  href='https://wa.me/375293317064'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 flex items-center justify-center bg-base-black base-frame lg:base-frame-interactive'
                >
                  <WhatsappIcon className='w-6 h-6 inline-block text-white' />
                </a>
              </li>

              {/* <li>
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
              <li>
                <a
                  href='https://www.tiktok.com/@proffhim'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 flex items-center justify-center bg-base-black base-frame lg:base-frame-interactive'
                >
                  <TikTokIcon className='w-6 h-6 inline-block text-white' />
                </a>
              </li>

              <li>
                <a
                  href='https://www.facebook.com/proffhim'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 flex items-center justify-center bg-base-black base-frame lg:base-frame-interactive'
                >
                  <FacebookIcon className='w-6 h-6 inline-block text-white' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.threads.net/@proffhim'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 flex items-center justify-center bg-base-black base-frame lg:base-frame-interactive'
                >
                  <ThreadsIcon className='w-6 h-6 inline-block text-white' />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className='w-full h-[2px] bg-base-black my-6 lg:mt-16 lg:mb-8'></div>
        <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4'>
          <p className='typo-b3 lg:text-center font-bold'>
            © {new Date().getFullYear()} ООО «ПроффХим». Все права защищены.
          </p>
          <Link
            href='/politika-konfidencialnosti'
            className='uppercase typo-b3 font-bold text-base-black inline-block border-b-[2px] border-transparent hover:border-base-black hover:text-base-black transition-[color,border-color] duration-200'
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
