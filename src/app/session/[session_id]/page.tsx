import { ContentTitle } from '@/components/Uis/ContentTitle'
import { PageTitle } from '@/components/Uis/PageTitle'
import { PASSIONS_NUM_TO_COLORS, PASSIONS_NUM_TO_TEXT } from '@/features/common/constant'
import { axiosClient } from '@/utils/libs/axios'
import utils from '@/styles/utils/index.module.scss'
import clsx from 'clsx'
import { BasicButton } from '@/components/Buttons/BasicButton'
import Link from 'next/link'

type SessionResponse = {
  id: number
  title: string
  user_name: string
  tags: string[]
  platform: string
  url: string
  passion_level: number
  content: string
  created_at: string
}

async function getServerSideProps(id: string) {
  const sessionData = (await axiosClient.get<SessionResponse>(`sessions/${id}`)).data
  return { session: sessionData }
}

export default async function SessionDetail({ params }: { params: { session_id: string } }) {
  const { session } = await getServerSideProps(params.session_id)
  const contentColor = PASSIONS_NUM_TO_COLORS[session.passion_level]
  return (
    <>
      <PageTitle title='セッション詳細' />
      <div
        className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-20'])}
        style={{ padding: '30px 0' }}
      >
        <ContentTitle title={session.title} color={contentColor} />

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='ユーザー名' color={contentColor} />
            <p className={clsx(utils.text, utils['size-large'])}>{session.user_name}</p>
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-16'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='タグ' color={contentColor} />
            <p className={clsx(utils.text, utils['size-large'])}>{session.tags.join(',')}</p>
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-16'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='プラットフォーム' color={contentColor} />
            <p className={clsx(utils.text, utils['size-large'])}>{session.platform}</p>
          </div>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='URL' color={contentColor} />
            <p className={clsx(utils.text, utils['size-large'])}>{session.url}</p>
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-16'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='ガチ度' color={contentColor} />
            <p className={clsx(utils.text, utils['size-large'])}>
              {PASSIONS_NUM_TO_TEXT[session.passion_level]}
            </p>
          </div>
        </div>

        <div
          className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
          style={{ width: '100%' }}
        >
          <ContentTitle title='コメント' color={contentColor} />
          <p className={clsx(utils.text, utils['size-large'])}>{session.content}</p>
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
