'use server';

import { z } from 'zod';
import { CallBackFormField } from '@/lib/definitions';

const callbackFormSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .refine((value) => value.replace(/\D/g, '').length >= 10),
  message: z.string().trim().min(1),
});

export type CallbackActionState = {
  success: boolean;
  message: string;
};

export async function submitCallbackForm(form: CallBackFormField): Promise<CallbackActionState> {
  const parsed = callbackFormSchema.safeParse(form);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Проверьте корректность данных формы.',
    };
  }

  console.info('Callback request:', parsed.data);

  return {
    success: true,
    message: 'Сообщение отправлено. Мы свяжемся с вами в ближайшее время.',
  };
}
