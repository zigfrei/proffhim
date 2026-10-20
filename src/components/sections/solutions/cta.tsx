import { BigLinkButton } from '@/components/ui/links';

export default function SolutionsCTA() {
  return (
    <section aria-labelledby='solutions-cta-title' className='flex w-full flex-col items-start justify-between gap-6 bg-primary p-5 base-frame-big lg:flex-row lg:items-center lg:p-8'>
      <div className='flex flex-col gap-3'>
        <h2 id='solutions-cta-title' className='typo-h3'>Нужно решение<br />под вашу задачу?</h2>
        <p className='typo-b2'>Поможем подобрать средство для вашего производства.</p>
      </div>
      <BigLinkButton href='/kontakty/#obraschenie' className='shrink-0 justify-center bg-main-background! text-center lg:typo-h5'>Связаться с нами</BigLinkButton>
    </section>
  );
}
