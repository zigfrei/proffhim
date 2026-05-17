'use server';

import { z } from 'zod';
import { QuizFormField } from '@/lib/definitions';

const quizFormSchema = z.object({
  quizAnswers: z.record(z.string(), z.string().trim().min(1)),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .refine((value) => value.replace(/\D/g, '').length >= 10),
});

export type QuizActionState = {
  success: boolean;
  message: string;
};

type QuizData = {
  quizAnswers: Record<string, string>;
  email: string;
  phone: string;
};

async function sendTelegramMessage(data: QuizData) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
  }

  const message = `
  💡🧠❓Заявка на разработку средства:
  Email: ${data.email}
  Телефон: ${data.phone}
  Ответы на вопросы опросника: ${JSON.stringify(data.quizAnswers, null, 2)}
  `;

  // console.log('Prepared Telegram message:', message);

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  // const response = {
  //   ok: true,
  //   status: 200,
  //   json: async (): Promise<{ ok: boolean; description?: string }> => ({ ok: true }),
  // };

  const result = await response.json();

  if (!response.ok || !result?.ok) {
    throw new Error(result?.description || `Telegram API error: ${response.status}`);
  }
}

export async function submitQuizForm(
  form: QuizFormField,
): Promise<QuizActionState> {
  const parsed = quizFormSchema.safeParse(form);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Проверьте корректность данных формы.',
    };
  }

  try {
    await sendTelegramMessage(parsed.data);

    return {
      success: true,
      message: 'Сообщение отправлено. Мы свяжемся с вами в ближайшее время.',
    };
  } catch (error) {
    console.error('submitQuizForm error:', error);
    return {
      success: false,
      message: 'Не удалось отправить сообщение. Попробуйте позже.',
    };
  }
}
