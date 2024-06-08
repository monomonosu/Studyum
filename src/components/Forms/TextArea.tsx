import style from '@/styles/components/forms/text_area.module.scss'

type ElementProps = JSX.IntrinsicElements['textarea']

export const TextArea = ({ ...props }: ElementProps) => {
  return (
    <div className={style.wrapper}>
      <textarea className={style['text-area']} {...props} />
    </div>
  )
}
