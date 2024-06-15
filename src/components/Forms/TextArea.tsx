import { ValidationMessage } from '@/components/Forms/ValidationMessage'
import style from '@/styles/components/forms/text_area.module.scss'
import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'

type ElementProps = JSX.IntrinsicElements['textarea']

type TextAreaProps = {
  register: UseFormRegisterReturn
  message?: string
  error?: boolean
} & ElementProps

export const TextArea = ({ register, message, error, ...props }: TextAreaProps) => {
  return (
    <div className={style.wrapper}>
      <textarea
        className={clsx(style['text-area'], error && style.error)}
        {...register}
        {...props}
      />

      {message && <ValidationMessage message={message} />}
    </div>
  )
}
