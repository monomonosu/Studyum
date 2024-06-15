'use client'
import CreatableSelect from 'react-select/creatable'
import styled from '@emotion/styled'

type OptionProps = {
  value: number
  label: string
}

type TagSelectProps = {
  options: OptionProps[]
  placeholder?: string
}

/**
 * @description CssModulesを使用できないのでstyled-componentsでスタイリング
 */
const CustomSelect = styled(CreatableSelect)`
  .complete__control {
    border-radius: 8px;
    border-color: #e0e0e0;
  }

  .complete__control:hover {
    outline: solid 1px #64b5f6;
  }

  .complete__placeholder {
    color: #e0e0e0;
  }
`

export const TagSelect = ({ options, placeholder }: TagSelectProps) => {
  return (
    <CustomSelect
      // フォーカス・ボバー時のスタイルをクラス指定できないので下記でオーバーライド
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          boxShadow: 'none',
          borderColor: state.isFocused ? '#64b5f6' : '#e0e0e0',
          ':hover': {
            borderColor: '#64b5f6'
          }
        })
      }}
      options={options}
      placeholder={placeholder}
      classNamePrefix='complete'
      isClearable
      isMulti
    />
  )
}
