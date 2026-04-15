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
  company: z.string().trim().min(1),
  message: z.string().trim().min(1),
});

export type CallbackActionState = {
  success: boolean;
  message: string;
};

type CallbackData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

async function sendTelegramMessage(data: CallbackData) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const message = `
📩 Запрос на получение сертификата:
Имя: ${data.name}
Email: ${data.email}
Телефон: ${data.phone}
Компания: ${data.company}
Сообщение: ${data.message}
  `;

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
  } catch (error) {
    console.error('Telegram error:', error);
  }
}

export async function submitCallbackForm(
  form: CallBackFormField,
): Promise<CallbackActionState> {
  const parsed = callbackFormSchema.safeParse(form);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Проверьте корректность данных формы.',
    };
  }

  await sendTelegramMessage(parsed.data);

  return {
    success: true,
    message: 'Сообщение отправлено. Мы свяжемся с вами в ближайшее время.',
  };
}
