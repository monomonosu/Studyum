import style from '@/styles/components/forms/text_area.module.scss'
import { UseFormRegisterReturn } from 'react-hook-form'

type ElementProps = JSX.IntrinsicElements['textarea']

type TextAreaProps = {
  register: UseFormRegisterReturn
} & ElementProps

export const TextArea = ({ register, ...props }: TextAreaProps) => {
  return (
    <div className={style.wrapper}>
      <textarea className={style['text-area']} {...register} {...props} />
    </div>
  )
}
