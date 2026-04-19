import SectionBlock from '@/components/ui/section';
import InstagramIcon from '@/assets/icons/instagram.svg';
import VKIcon from '@/assets/icons/vkontakte.svg';
import Map from '@/components/ui/ya-map';
import { MAP_CUSTOMIZATION } from '@/features/map/variables';

export default function Hero() {
  return (
    <SectionBlock>
      <div className='flex flex-col lg:flex-row w-full h-full min-h-0 items-stretch justify-center gap-4 lg:gap-8'>
        <div className=' w-full flex flex-col items-start justify-start gap-4 lg:gap-6'>
          <h2 className='w-full text-center typo-h2 base-frame-big bg-primary p-4 lg:px-8 lg:py-6'>
            Контакты
          </h2>

          <p className='w-full typo-h5 base-frame-big p-4 lg:px-8 lg:py-6'>
            Адрес: Республика Беларусь, Гродненская область, Гродненский район,
            Одельский сельсовет, деревня Подлипки, строение&nbsp;7
          </p>

          <p className='w-full typo-h5 base-frame-big p-4 lg:px-8 lg:py-6'>
            {/* Телефон/факс:{' '}
            <a
              href='tel:+375152605277'
              className='hover:text-primary transition-colors duration-200'
            >
              +375 152 605277
            </a> */}
            <br />
            Телефоны:{' '}
            <a
              href='tel:+375296729520'
              className='hover:text-primary transition-colors duration-200'
            >
              +375 (29) 6729520
            </a>
            ,
            <br />{' '}
            <a
              href='tel:+375291060587'
              className='hover:text-primary transition-colors duration-200'
            >
              +375 (29) 1060587
            </a>
          </p>

          <ul className='w-full flex items-center justify-start base-frame-big p-4 lg:px-8 lg:py-6 gap-2'>
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
        <div className='w-full h-[400px] lg:h-auto self-stretch'>
          <Map customization={MAP_CUSTOMIZATION} />
        </div>
      </div>
    </SectionBlock>
  );
}
