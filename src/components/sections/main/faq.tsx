import SectionBlock from '@/components/ui/section';
import FAQItem from '@/components/ui/faq-item';
import { faqItems } from '@/components/sections/main/faq-items';

export default function FAQ() {
  return (
    <SectionBlock>
      <div className='w-full flex items-center justify-center gap-8 flex-col faq-container'>
        <h3 className='typo-h2'>ВОПРОСЫ И ОТВЕТЫ</h3>
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </SectionBlock>
  );
}
