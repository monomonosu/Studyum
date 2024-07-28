'use client'

import style from '@/styles/components/forms/radio_group.module.scss'
import { UseFormRegisterReturn } from 'react-hook-form'

type OptionProps = {
  value: string
  label: string
  icon?: JSX.Element
}

type ElementProps = JSX.IntrinsicElements['input']

type Props = {
  options: OptionProps[]
  register: UseFormRegisterReturn
} & ElementProps

export const RadioGroup = ({ options, register, ...props }: Props) => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style['radio-wrapper']}>
          {options.map(({ value, label, icon }) => (
            <label
              className={style['radio-group']}
              key={`${register.name}-${value}`}
              htmlFor={`${register.name}-${value}`}
            >
              <input
                id={`${register.name}-${value}`}
                {...register}
                {...props}
                type='radio'
                value={value}
              />
              <span>
                {icon}
                <span className={style['radio-inner']}>{label}</span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  )
}
