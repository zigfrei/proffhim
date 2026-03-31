import Hero from '@/components/sections/contacts/hero';
import Form from '@/components/sections/contacts/form';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full'>
      <Hero />
      <Form />
    </main>
  );
}
