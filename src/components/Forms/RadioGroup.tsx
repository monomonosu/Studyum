'use client'

import style from '@/styles/components/forms/radio_group.module.scss'
import { useState } from 'react'

type OptionProps = {
  value: string
  label: string
}

type ElementProps = JSX.IntrinsicElements['input']

type Props = {
  options: OptionProps[]
} & ElementProps

export const RadioGroup = ({ options, ...props }: Props) => {
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
          {options.map(({ value, label }) => (
            <label
              className={style['radio-group']}
              key={`radio-${value}`}
              htmlFor={`radio-${value}`}
            >
              <input
                id={`radio-${value}`}
                name={`radio-${value}`}
                type='radio'
                value={value}
                onChange={handleChange}
                checked={selectedValue === value}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  )
}
