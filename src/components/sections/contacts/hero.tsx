import SectionBlock from '@/components/ui/section';
// import InstagramIcon from '@/assets/icons/instagram.svg';
// import VKIcon from '@/assets/icons/vkontakte.svg';
// import TikTokIcon from '@/assets/icons/tiktok.svg';
// import FacebookIcon from '@/assets/icons/facebook.svg';
// import ThreadsIcon from '@/assets/icons/threads.svg';
import TelegramIcon from '@/assets/icons/telegram.svg';
import MaxIcon from '@/assets/icons/max.svg';
import ViberIcon from '@/assets/icons/viber.svg';
import WhatsappIcon from '@/assets/icons/whatsapp.svg';
import Map from '@/components/ui/ya-map';
import { MAP_CUSTOMIZATION } from '@/features/map/variables';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <SectionBlock>
      <div className='flex flex-col lg:flex-row w-full h-full min-h-0 items-stretch justify-center gap-4 lg:gap-8'>
        <div className=' w-full flex flex-col items-start justify-start gap-4 lg:gap-6'>
          <h1 className='w-full text-center typo-h2 base-frame-big bg-primary p-4 lg:px-8 lg:py-6'>
            Контакты
          </h1>

          <p className='w-full typo-h5 base-frame-big p-4 lg:px-8 lg:py-6'>
            Адрес: 231731, Республика Беларусь, Гродненская область, Гродненский
            район, Одельский сельсовет, д. Подлипки, строение&nbsp;7
          </p>
          <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 base-frame-big p-4 lg:px-8 lg:py-6'>
            <p className='typo-h5'>УНП: 591506904</p>
            <div className='flex items-center justify-center gap-1'>
              <Icon
                icon='material-symbols:mail'
                className='w-8 h-8 text-base-black'
              />
              <a
                href='mailto:proffhimsale@mail.ru'
                className='typo-h5 hover:text-primary transition-colors duration-200'
              >
                proffhimsale@mail.ru
              </a>
            </div>
          </div>
          <p className='w-full typo-h5 base-frame-big p-4 lg:px-8 lg:py-6'>
            Телефоны:{' '}
            <a
              href='tel:+375296729520'
              className='hover:text-primary transition-colors duration-200'
            >
              +375 (29) 6729520
            </a>
            ,{' '}
            <a
              href='tel:+375291060587'
              className='hover:text-primary transition-colors duration-200'
            >
              +375 (29) 1060587
            </a>
            ,{' '}
            <a
              href='tel:+375152605277'
              className='hover:text-primary transition-colors duration-200'
            >
              +375 (152) 605277
            </a>
            ,{' '}
            <a
              href='tel:+375152605177'
              className='hover:text-primary transition-colors duration-200'
            >
              +375 (152) 605177
            </a>
          </p>

          <ul className='w-full flex items-center justify-start base-frame-big p-4 lg:px-8 lg:py-6 gap-2'>
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
                  href='viber://chat?number=%2B375292684295'
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
        <div className='w-full h-[400px] lg:h-auto self-stretch'>
          <Map customization={MAP_CUSTOMIZATION} />
        </div>
      </div>
    </SectionBlock>
  );
}
