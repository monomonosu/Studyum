import style from '@/styles/components/forms/text_input.module.scss'

type ElementProps = JSX.IntrinsicElements['input']

export const TextInput = ({ ...props }: ElementProps) => {
  return (
    <div className={style['input-wrapper']}>
      <div className={style['input-wrapper']}>
        <div className={style['width-wrapper']}>
          <input className={style['text-input']} {...props} />
        </div>
      </div>
    </div>
  )
}
