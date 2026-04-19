import { SectionBlockSmall } from '@/components/ui/section';
import FAQItem from '@/components/ui/faq-item';
import { faqItemsB2B } from '@/lib/faq';

export default function FAQ() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex items-center justify-center gap-4 lg:gap-8 flex-col faq-container'>
        <h3 className='typo-h2'>ВОПРОСЫ И ОТВЕТЫ</h3>
        {faqItemsB2B.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </SectionBlockSmall>
  );
}
