import { BigLinkButton } from '@/components/ui/links';

export default function NotFound() {
  return (
    <main className='flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 px-4 text-center pt-19 lg:pt-24'>
      <h1 className='typo-h1'>404</h1>
      <p className='typo-h3 max-w-[1360px]'>
        Страница не найдена или адрес введён неверно.
      </p>
      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6'>
                    <BigLinkButton
                      href='/'
                      className='lg:mt-4 lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center'
                    >
                      на главную
                    </BigLinkButton>

                                        <BigLinkButton
                      href='/produktsiya'
                      className='lg:mt-4 lg:mb-0 w-full lg:w-auto max-w-[420px] lg:max-w-none justify-center'
                    >
                      в каталог
                    </BigLinkButton>
      </div>

    </main>
  );
}