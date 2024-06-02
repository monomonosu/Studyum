import style from '@/styles/components/Uis/page_title.module.scss'
import utils from '@/styles/utils/index.module.scss'
import clsx from 'clsx'

interface Props {
  title?: string
}

export const PageTitle = ({ title }: Props) => {
  return (
    <div className={style['page-title-container']}>
      <p className={clsx(utils.text, utils['size-large'], utils['weight-bold'])}>{title}</p>
    </div>
  )
}
