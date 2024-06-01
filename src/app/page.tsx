import TopBanner from '@/features/top/components/TopBanner'
import { BaseLayout } from '@/components/Layouts/BaseLayout'
import { BasicChip } from '@/components/Buttons/BasicChip'
import { BasicButton } from '@/components/Buttons/BasicButton'
import { SessionCard } from '@/components/Cards/SessionCard'
import { PASSIONS_NUM_TO_COLORS } from '@/features/common/constant'
import style from '@/styles/features/top/top.module.scss'
import { axiosClient } from '@/utils/libs/axios'

type SessionsResponse = {
  id: number
  user_name: string
  title: string
  tags: string[]
  content: string
  passion_level: number
  created_at: string
}[]

type TagsResponse = {
  id: number
  tag_name: string
}[]

async function getServerSideProps() {
  const sessionsData = (await axiosClient.get<SessionsResponse>('sessions')).data
  const tagsData = (await axiosClient.get<TagsResponse>('tags')).data
  return { sessions: sessionsData, tags: tagsData }
}

export default async function Home() {
  const { sessions, tags } = await getServerSideProps()
  return (
    <>
      <TopBanner />
      <BaseLayout>
        <div className={style['custom-container']}>
          <div className={style['tag-container']}>
            {tags.map((tag) => (
              <BasicChip key={tag.id} text={tag.tag_name} className='-text-black' />
            ))}
          </div>
          <div>
            <BasicButton
              color='success'
              variant='contained'
              text='セッションを募集する'
              width='100%'
              className='-shadow'
            />
          </div>
          <div className={style['card-container']}>
            {sessions.map((session, index) => (
              <SessionCard
                key={index}
                userName={session.user_name}
                title={session.title}
                tags={session.tags}
                content={session.content}
                width='100%'
                color={PASSIONS_NUM_TO_COLORS[session.passion_level]}
              />
            ))}
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
