import style from '@/styles/components/Uis/content_title.module.scss'
import utils from '@/styles/utils/index.module.scss'
import clsx from 'clsx'

interface Props {
  title?: string
  color?: Color
  required?: boolean
}

export const ContentTitle = ({ title, color = 'primary', required }: Props) => {
  return (
    <div className={clsx(style.container, style[`bg-color-${color}`])}>
      <span
        className={clsx(
          utils.text,
          utils['size-large'],
          utils['weight-bold'],
          color !== 'info' && utils['color-white']
        )}
      >
        {title}
      </span>
      {required && (
        <span className={clsx(utils.text, utils['size-small'], utils['color-red'])}>※必須</span>
      )}
    </div>
  )
}
