'use client'
import CreatableSelect from 'react-select/creatable'
import styled from '@emotion/styled'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { ValidationMessage } from '@/components/Forms/ValidationMessage'

type OptionProps = {
  value: string
  label: string
}

type TagSelectProps<T extends FieldValues> = {
  options: OptionProps[]
  placeholder?: string
  control: Control<T>
  name: Path<T>
  message?: string
  error?: boolean
}

/**
 * @description CssModulesを使用できないのでstyled-componentsでスタイリング
 */
const CustomSelect = styled(CreatableSelect)<{ error?: boolean | undefined }>`
  .complete__control {
    border-radius: 8px;
    border-color: ${({ error }) => (error ? `#e57373` : `#e0e0e0`)};
  }

  .complete__control:hover {
    outline: solid 1px #64b5f6;
  }

  .complete__placeholder {
    color: #e0e0e0;
  }
`

export const TagSelect = <T extends FieldValues>({
  options,
  placeholder,
  name,
  control,
  message,
  error
}: TagSelectProps<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CustomSelect
            {...field}
            value={field.value}
            onChange={(selectedOption) => {
              field.onChange(selectedOption)
            }}
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
            error={error}
            classNamePrefix='complete'
            isClearable
            isMulti
          />
        )}
      />
      {message && <ValidationMessage message={message} />}
    </>
  )
}
