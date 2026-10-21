'use client';

import { Suspense, type RefObject } from 'react';
import { Canvas } from '@react-three/fiber';
import BottleModel from './bottle-model';

interface BottleSceneProps {
  angleRef: RefObject<number>;
  autoRotate: boolean;
  active: boolean;
  onReady: () => void;
  onError: () => void;
  requestFrameRef: RefObject<(() => void) | null>;
}

export default function BottleScene({ angleRef, autoRotate, active, onReady, onError, requestFrameRef }: BottleSceneProps) {
  return (
    <Canvas
      aria-hidden='true'
      dpr={[1, 2]}
      camera={{ position: [0, 0.45, 8.8], fov: 30, near: 0.1, far: 30 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      frameloop={active ? (autoRotate ? 'always' : 'demand') : 'never'}

      onCreated={({ gl, camera }) => {
        camera.lookAt(0, 0.12, 0);
        gl.domElement.addEventListener('webglcontextlost', onError, { once: true });
      }}
    >
      <Suspense fallback={null}>
        <BottleModel angleRef={angleRef} autoRotate={autoRotate} onReady={onReady} requestFrameRef={requestFrameRef} />
      </Suspense>
    </Canvas>
  );
}
