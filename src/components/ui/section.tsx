import type { ComponentPropsWithoutRef } from 'react';

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  wrapperClassName?: string;
};

export default function SectionBlock({ children, className = '', wrapperClassName='', ...rest }: SectionProps) {
  return (
    <section className={`flex w-full flex items-center justify-center ${className}`} {...rest}>
        <div className={`w-full px-12 py-24 max-w-[1440px] flex flex-col items-center justify-center ${wrapperClassName}`}>
          {children}
        </div>
    </section>
  );
}
