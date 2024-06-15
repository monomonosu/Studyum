import { ValidationMessage } from '@/components/Forms/ValidationMessage'
import style from '@/styles/components/forms/text_input.module.scss'
import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'

type ElementProps = JSX.IntrinsicElements['input']

type TextInputProps = {
  register: UseFormRegisterReturn
  message?: string
  error?: boolean
} & ElementProps

export const TextInput = ({ register, message, error, ...props }: TextInputProps) => {
  return (
    <div className={style['input-wrapper']}>
      <div className={style['input-wrapper']}>
        <div className={style['width-wrapper']}>
          <input
            className={clsx(style['text-input'], error && style.error)}
            {...register}
            {...props}
          />

          {message && <ValidationMessage message={message} />}
        </div>
      </div>
    </div>
  )
}
