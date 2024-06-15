import style from '@/styles/components/forms/validation_message.module.scss'

type Props = {
  message: string | undefined
}

export const ValidationMessage = ({ message }: Props) => {
  return message ? <div className={style.message}>{message}</div> : null
}
