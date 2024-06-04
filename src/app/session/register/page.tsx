import { BasicButton } from '@/components/Buttons/BasicButton'
import { TextInput } from '@/components/Forms/Input'
import { ContentTitle } from '@/components/Uis/ContentTitle'
import { PageTitle } from '@/components/Uis/PageTitle'
import utils from '@/styles/utils/index.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

export default async function SessionRegister() {
  return (
    <>
      <PageTitle title='セッション募集' />
      <div
        className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-20'])}
        style={{ padding: '30px 0' }}
      >
        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='ユーザー名' color='info' />
            <TextInput placeholder='田中　太郎' />
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='タイトル' color='info' />
            <TextInput placeholder='もくもく会メンバー募集' />
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            {/* TODO：タグ用のコンポーネントに切り替え */}
            <ContentTitle title='タグ' color='info' />
            <TextInput placeholder='もくもく会' />
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            {/* TODO：プラットフォーム用（セレクト？ラジオ？）のコンポーネントに切り替え */}
            <ContentTitle title='プラットフォーム' color='info' />
            <TextInput placeholder='GoogleMeet' />
          </div>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='URL' color='info' />
            <TextInput placeholder='https://meet.google.com/xxx-xxx-xxx' />
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            {/* TODO：タグ用のコンポーネントに切り替え */}
            <ContentTitle title='ガチ度' color='info' />
            <TextInput placeholder='まったり' />
          </div>
        </div>

        <div className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}>
          <ContentTitle title='コメント' color='info' />
          <TextInput placeholder='まったり' />
        </div>

        <div className={clsx(utils['center-wrapper'])}>
          <BasicButton
            color='success'
            variant='contained'
            text='セッションを募集する'
            width='200px'
            className='-shadow'
          />
        </div>

        <div className={clsx(utils['center-wrapper'])}>
          <Link href='/'>
            <BasicButton
              color='info'
              variant='contained'
              text='TOPに戻る'
              width='200px'
              className='-shadow'
            />
          </Link>
        </div>
      </div>
    </>
  )
}