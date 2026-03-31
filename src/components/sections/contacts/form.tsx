import SectionBlock from '@/components/ui/section';
import { CallbackForm } from '@/components/ui/callback-form';

export default function CTA() {
  return (
    <SectionBlock wrapperClassName='pt-0!' className='scroll-mt-22 lg:scroll-mt-32' id='contact-us'>
      <div className='w-full flex flex-col items-center justify-center gap-4 lg:gap-8 '>
        <h3 className='typo-h2 base-frame lg:base-frame-big bg-primary p-4 lg:px-8 lg:py-6'>Свяжитесь с нами</h3>
        <CallbackForm />
      </div>
    </SectionBlock>
  );
}
