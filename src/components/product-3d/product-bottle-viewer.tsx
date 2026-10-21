'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Component, useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';

const BottleScene = dynamic(() => import('./bottle-scene'), { ssr: false });
const FRONT_ROTATION = -Math.PI * 0.53;

class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error) {
    console.error('Не удалось загрузить 3D-модель PROFFITALL:', error);
    this.props.onError();
  }
  render() { return this.state.failed ? null : this.props.children; }
}

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}
function subscribeVisibility(callback: () => void) {
  document.addEventListener('visibilitychange', callback);
  return () => document.removeEventListener('visibilitychange', callback);
}
const getReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const getVisible = () => document.visibilityState === 'visible';
const serverFalse = () => false;

export default function ProductBottleViewer() {
  const wrapper = useRef<HTMLDivElement>(null);
  const angleRef = useRef(FRONT_ROTATION);
  const requestFrameRef = useRef<(() => void) | null>(null);
  const drag = useRef<{ id: number; x: number } | null>(null);
  const [load, setLoad] = useState(false);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, serverFalse);
  const tabVisible = useSyncExternalStore(subscribeVisibility, getVisible, serverFalse);
  const autoRotate = !isDragging && !reducedMotion;
  const onReady = useCallback(() => setReady(true), []);
  const onError = useCallback(() => setFailed(true), []);
  const stopDragging = useCallback(() => {
    drag.current = null;
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const element = wrapper.current;
    if (!element) return;
    const preload = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoad(true);
        preload.disconnect();
      }
    }, { rootMargin: '2000px 0px' });
    const visibility = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    preload.observe(element);
    visibility.observe(element);
    return () => { preload.disconnect(); visibility.disconnect(); };
  }, []);

  return (
    <div ref={wrapper} className='relative aspect-[3/4] w-full lg:aspect-auto lg:h-full lg:min-h-[640px]'>
      {failed && (
        <Image src='/products/profitall_anti.png' alt='Средство для стирки PROFFITALL «Антибактериальное», 1,4 л' fill sizes='(min-width: 1024px) 30vw, 100vw' className='object-contain' />
      )}
      {load && !failed && (
        <div
          role='group'
          aria-label='3D-модель PROFFITALL. Перетаскивайте для вращения или используйте стрелки влево и вправо.'
          tabIndex={ready ? 0 : -1}
          className={`absolute inset-x-0 top-0 bottom-16 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-black ${ready ? 'cursor-grab active:cursor-grabbing' : 'opacity-0'}`}
          style={{ touchAction: 'pan-y' }}
          onKeyDown={(event) => {
            if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
            event.preventDefault();
            angleRef.current += event.key === 'ArrowLeft' ? -0.18 : 0.18;
            requestFrameRef.current?.();
          }}
          onPointerDown={(event) => {
            if (!ready || drag.current || (event.pointerType === 'mouse' && event.button !== 0)) return;
            setIsDragging(true);
            drag.current = { id: event.pointerId, x: event.clientX };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!drag.current || drag.current.id !== event.pointerId) return;
            angleRef.current += (event.clientX - drag.current.x) * 0.012;
            drag.current.x = event.clientX;
            requestFrameRef.current?.();
          }}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onLostPointerCapture={stopDragging}
        >
          <SceneBoundary onError={onError}>
            <BottleScene angleRef={angleRef} autoRotate={autoRotate} active={inView && tabVisible} onReady={onReady} onError={onError} requestFrameRef={requestFrameRef} />
          </SceneBoundary>
        </div>
      )}

    </div>
  );
}
