// import { Suspense } from 'react';
import AboutHero from '@/components/sections/about/main';
import History from '@/components/sections/about/history';
import Values from '@/components/sections/about/values';
import Team from '@/components/sections/about/team';
import Capacity from '@/components/sections/about/capacity';

export const metadata = {
  title: "О компании | ПроффХим",
  description: "ООО ПроффХим (Гродно) — производитель и оптовый поставщик моющих, чистящих и дезинфицирующих средств, пищевых добавок и промышленной химии. На странице представлена история компании, этапы развития, ценности и ключевые направления работы.",
};


export default function AboutPage() {
  return (
    <main className='flex flex-col items-center justify-center w-full'>
      {/* <Suspense fallback={null}> */}
        <AboutHero />
        <History />
        <Values />
        <Team />
        <Capacity />
      {/* </Suspense> */}
    </main>
  );
}