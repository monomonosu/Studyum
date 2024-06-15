'use client'

import style from '@/styles/components/forms/radio_group.module.scss'
import { useState } from 'react'
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
  const [selectedValue, setSelectedValue] = useState<string>('1')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value)
    if (props.onChange) {
      props.onChange(e)
    }
  }
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
                type='radio'
                value={value}
                onChange={handleChange}
                checked={selectedValue === value}
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
