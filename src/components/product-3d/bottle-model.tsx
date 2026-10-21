'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, type RefObject } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { CanvasTexture, Group, PMREMGenerator, SRGBColorSpace, TextureLoader, Vector2 } from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// Размеры относительные: прототип восстановлен по фотографии, без CAD-исходника.
export const FRONT_ROTATION = -Math.PI * 0.53;
const bodyProfile = [
  [0.001, -2], [0.42, -2], [0.54, -1.98], [0.60, -1.93],
  [0.62, -1.85], [0.62, 1.28], [0.615, 1.37], [0.59, 1.44],
  [0.53, 1.49], [0.43, 1.52], [0.30, 1.54], [0.29, 1.66], [0.001, 1.66],
].map(([radius, height]) => new Vector2(radius, height));
const capProfile = [
  [0.001, 1.57], [0.35, 1.57], [0.365, 1.59], [0.365, 1.87],
  [0.35, 1.90], [0.27, 1.90], [0.27, 2.28], [0.26, 2.33],
  [0.23, 2.36], [0.16, 2.38], [0.001, 2.38],
].map(([radius, height]) => new Vector2(radius, height));

function StudioLight() {
  const getState = useThree((state) => state.get);
  useLayoutEffect(() => {
    const { gl, scene, invalidate } = getState();
    const generator = new PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const target = generator.fromScene(room, 0.06);
    room.dispose();
    generator.dispose();
    const previous = scene.environment;
    const previousIntensity = scene.environmentIntensity;
    // GPU-карта создаётся заново при каждом setup эффекта, включая Strict Mode
    // и восстановление страницы. Освобождённый render target переиспользовать нельзя.
    scene.environment = target.texture;
    scene.environmentIntensity = 0.4;
    invalidate();
    return () => {
      if (scene.environment === target.texture) {
        scene.environment = previous;
        scene.environmentIntensity = previousIntensity;
      }
      target.dispose();
      invalidate();
    };
  }, [getState]);
  return null;
}

function ContactShadow() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 128;
    const context = canvas.getContext('2d');
    if (context) {
      const gradient = context.createRadialGradient(64, 64, 8, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(0,0,0,0.32)');
      gradient.addColorStop(0.4, 'rgba(0,0,0,0.16)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 128, 128);
    }
    return new CanvasTexture(canvas);
  }, []);
  useEffect(() => () => texture.dispose(), [texture]);
  return (
    <mesh position={[0, -2.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Более плоская тень помещается в кадр без уменьшения флакона. */}
      <planeGeometry args={[2.6, 1.2]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} />
    </mesh>
  );
}

export interface BottleModelProps {
  angleRef: RefObject<number>;
  autoRotate: boolean;
  onReady: () => void;
  requestFrameRef: RefObject<(() => void) | null>;
}

export default function BottleModel({ angleRef, autoRotate, onReady, requestFrameRef }: BottleModelProps) {
  const bottle = useRef<Group>(null);
  const source = useLoader(TextureLoader, '/products/labels/profitall_anti-3d.webp');
  const { gl, invalidate } = useThree();
  // Соотношение сторон развёртки совпадает с окружностью и высотой этикетки.
  const labelHeight = 2 * Math.PI * 0.623 * source.image.height / source.image.width;
  const label = useMemo(() => {
    const texture = source.clone();
    texture.colorSpace = SRGBColorSpace;
    texture.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
    texture.needsUpdate = true;
    return texture;
  }, [source, gl]);
  useEffect(() => () => label.dispose(), [label]);
  useEffect(() => {
    requestFrameRef.current = invalidate;
    invalidate();
    // Показываем сцену после первого кадра, когда этикетка уже загружена.
    const frame = requestAnimationFrame(onReady);
    return () => {
      cancelAnimationFrame(frame);
      requestFrameRef.current = null;
    };
  }, [invalidate, onReady, requestFrameRef]);
  useFrame((_, delta) => {
    if (autoRotate) angleRef.current += Math.min(delta, 0.05) * 0.24;
    if (bottle.current) bottle.current.rotation.y = angleRef.current;
  });
  return (
    <>
      <StudioLight />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 5]} intensity={1.4} />
      <directionalLight position={[-4, 1, -2]} intensity={0.8} />
      <group ref={bottle} rotation={[0, FRONT_ROTATION, 0]}>
        <mesh>
          <latheGeometry args={[bodyProfile, 96]} />
          <meshPhysicalMaterial color='#090a0c' roughness={0.38} metalness={0} clearcoat={0.18} clearcoatRoughness={0.35} />
        </mesh>
        <mesh position={[0, -0.16, 0]}>
          <cylinderGeometry args={[0.623, 0.623, labelHeight, 96, 1, true]} />
          <meshStandardMaterial map={label} roughness={0.48} metalness={0} />
        </mesh>
        <mesh>
          <latheGeometry args={[capProfile, 64]} />
          <meshPhysicalMaterial color='#ffffff' roughness={0.35} metalness={0} clearcoat={0.12} />
        </mesh>
        <mesh position={[0, 1.61, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.36, 0.008, 8, 64]} />
          <meshStandardMaterial color='#e2e2e2' roughness={0.5} />
        </mesh>
      </group>
      <ContactShadow />
    </>
  );
}
