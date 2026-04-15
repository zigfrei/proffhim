import BeforeAndAfter from "@/components/sections/main/before-after";
import CTA from "@/components/sections/main/cta";
import FAQ from "@/components/sections/main/faq";
import { faqItems } from "@/components/sections/main/faq-items";
import Hero from "@/components/sections/main/hero";
import Numbers from "@/components/sections/main/numbers";
import Partners from "@/components/sections/main/partners";
import Scope from "@/components/sections/main/scope";
import Cards from "@/components/sections/main/cards";
import Documents from "@/components/sections/main/documents";
import B2B from "@/components/sections/main/b2b";

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <main className="flex flex-col items-center justify-center w-full scroll-mt-22 lg:scroll-mt-32">
        <Hero />
        <Numbers />
        <Scope />
        <Documents />
        <Partners />
        <BeforeAndAfter />
        <Cards />
        <B2B />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
