import Hero from '@/components/sections/contacts/hero';
import Form from '@/components/sections/contacts/form';

export const metadata = {
  title: "Контакты | ПроффХим",
  description: "Контакты компании: адрес, телефон, email и форма обратной связи. Свяжитесь с нами для получения консультации, заказа продукции или сотрудничества.",
};


export default function Contacts() {
  return (
    <main className='flex flex-col items-center justify-center w-full'>
      <Hero />
      <Form />
    </main>
  );
}
