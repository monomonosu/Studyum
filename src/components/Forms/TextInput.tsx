import style from '@/styles/components/forms/text_input.module.scss'
import { UseFormRegisterReturn } from 'react-hook-form'

type ElementProps = JSX.IntrinsicElements['input']

type TextInputProps = {
  register: UseFormRegisterReturn
} & ElementProps

export const TextInput = ({ register, ...props }: TextInputProps) => {
  return (
    <div className={style['input-wrapper']}>
      <div className={style['input-wrapper']}>
        <div className={style['width-wrapper']}>
          <input className={style['text-input']} {...register} {...props} />
        </div>
      </div>
    </div>
  )
}
