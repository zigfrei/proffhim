import SectionBlock from '@/components/ui/section';
import { CertificateCallbackForm } from '@/components/ui/certificate-callback-form';

export default function CertificateForm() {
  return (
    <SectionBlock wrapperClassName='pt-0!' className='scroll-mt-22 lg:scroll-mt-32'>
      <div className='w-full base-frame lg:base-frame-big bg-primary flex flex-col items-start justify-center gap-4 lg:gap-8 p-4 lg:px-8 lg:py-6'>
        <h3 className='typo-h2'>Не нашли нужный документ?</h3>
        <p className='typo-body lg:text-3xl!'>Оставьте нам запрос и мы предоставим необходимую информацию.</p>
        <CertificateCallbackForm />
      </div>
    </SectionBlock>
  );
}
