import style from '@/styles/components/Uis/content_title.module.scss'
import utils from '@/styles/utils/index.module.scss'
import clsx from 'clsx'

interface Props {
  title?: string
  color?: Color
}

export const ContentTitle = ({ title, color = 'primary' }: Props) => {
  return (
    <div className={clsx(style.container, style[`bg-color-${color}`])}>
      <p
        className={clsx(
          utils.text,
          utils['size-large'],
          utils['weight-bold'],
          color !== 'info' && utils['color-white']
        )}
      >
        {title}
      </p>
    </div>
  )
}
