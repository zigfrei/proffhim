'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { CallBackFormField } from '../../lib/definitions';
import { BigButton } from '@/components/ui/buttons';

// export function CallbackForm({ callBackMessage }: { callBackMessage: CallBackFormField }) {
export function CallbackForm() {
  return (
    <form className='w-full'>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-4'>
          <div className='w-full flex items-start justify-start'>
            <label htmlFor='name' className='sr-only'>
              Ваше имя
            </label>
            <input
              id='name'
              name='name'
              type='text'
              aria-describedby='name-error'
              placeholder='Ваше имя'
              className='base-input'
            />
          </div>
          <div className='w-full flex items-start justify-start'>
            <label htmlFor='email' className='sr-only'>
              Ваш email
            </label>
            <input
              id='email'
              name='email'
              type='text'
              aria-describedby='email-error'
              placeholder='Ваш email'
              className='base-input'
            />
          </div>
        </div>
        <div className='w-full flex items-start justify-start'>
          <label htmlFor='phone' className='sr-only'>
            Ваш телефон
          </label>
          <input
            id='phone'
            name='phone'
            type='text'
            aria-describedby='phone-error'
            placeholder='Ваш телефон'
            className='base-input'
          />
        </div>
        <div className='w-full flex items-start justify-start'>
          <label htmlFor='message' className='sr-only'>
            Ваше сообщение
          </label>
          <textarea
            id='message'
            name='message'
            aria-describedby='message-error'
            placeholder='Ваше сообщение'
            className='base-input'
            rows={4}
          />
        </div>
        <BigButton className='w-full' type='submit'>Отправить сообщение</BigButton>
      </div>
    </form>
  );
}
