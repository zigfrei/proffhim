'use client';

import { type CSSProperties, useEffect, useState } from 'react';
import styles from './snowfall.module.css';

const preferenceKey = 'proffhim-snow-disabled';
const flakes = Array.from({ length: 80 }, (_, index) => {
  const duration = 10 + ((index * 7) % 13);
  const phase = (0.35 + index * 0.414214) % 1;

  return {
    left: `${2 + ((index * 61.8034) % 96)}%`,
    width: `${3 + (index % 6)}px`,
    opacity: 0.72 + (index % 4) * 0.09,
    animationDuration: `${duration}s`,
    animationDelay: `-${(phase * duration).toFixed(2)}s`,
    '--drift': `${index % 2 === 0 ? 46 : -38}px`,
  } as CSSProperties;
});

export function Snowfall() {
  const [ready, setReady] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReduceMotion(motionPreference.matches);
    const syncVisibility = () => setPaused(document.hidden);
    const frame = requestAnimationFrame(() => {
      try {
        setDisabled(window.localStorage.getItem(preferenceKey) === 'true');
      } catch {
        // The switch still works for the current visit if storage is blocked.
      }
      syncMotion();
      syncVisibility();
      setReady(true);
    });

    motionPreference.addEventListener('change', syncMotion);
    document.addEventListener('visibilitychange', syncVisibility);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('visibilitychange', syncVisibility);
      motionPreference.removeEventListener('change', syncMotion);
    };
  }, []);

  function toggleSnow() {
    const nextDisabled = !disabled;
    setDisabled(nextDisabled);
    try {
      window.localStorage.setItem(preferenceKey, String(nextDisabled));
    } catch {
      // Keep the in-memory preference.
    }
  }

  if (!ready || reduceMotion) return null;

  return (
    <>
      {!disabled && (
        <div
          aria-hidden='true'
          className={styles.layer}
          data-paused={paused}
        >
          {flakes.map((style, index) => (
            <span key={index} className={styles.flake} style={style} />
          ))}
        </div>
      )}
      <button
        type='button'
        onClick={toggleSnow}
        className='typo-b3 cursor-pointer underline underline-offset-4'
      >
        {disabled ? 'Включить снег' : 'Выключить снег'}
      </button>
    </>
  );
}
