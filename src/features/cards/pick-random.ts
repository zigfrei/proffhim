import type { Product } from '@/features/catalog/products/config';

const randomInt = (max: number) => {
  const buf = new Uint32Array(1);
  crypto.getRandomValues(buf);
  return buf[0] % max;
};

export const pickRandomProducts = (items: Product[], limit: number) => {
  const arr = [...items];

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = randomInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.slice(0, limit);
};