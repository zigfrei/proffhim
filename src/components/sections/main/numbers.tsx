'use client';
import SectionBlock from '@/components/ui/section';
import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <h2 ref={ref} className='typo-h2 text-primary'>
      {displayValue}{suffix}
    </h2>
  );
}

function StatItem({ value, suffix = '', label }: StatItemProps) {
  return (
    <div className='w-full flex flex-col items-center justify-center border-r-[2px] border-primary last:border-0'>
      <AnimatedNumber value={value} suffix={suffix} />
      <p className='typo-body text-main-background'>{label}</p>
    </div>
  );
}

const STATS: StatItemProps[] = [
  { value: 100, suffix: '+', label: 'Постоянных клиентов' },
  { value: 100, suffix: '+', label: 'Постоянных клиентов' },
  { value: 100, suffix: '+', label: 'Постоянных клиентов' },
];

export default function Numbers() {
  return (
    <SectionBlock className='bg-black'>
      <div className='w-full flex flex-col items-start justify-center gap-16 my-16'>
        <div className='w-full h-[5px] bg-primary'></div>
        <div className='w-full flex items-start justify-center gap-16'>
          {STATS.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}