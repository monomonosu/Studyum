import TopBanner from '@/features/top/components/TopBanner'
import { BaseLayout } from '@/components/Layouts/BaseLayout'
import { BasicChip } from '@/components/Buttons/BasicChip'
import { BasicButton } from '@/components/Buttons/BasicButton'
import { SessionCard } from '@/components/Cards/SessionCard'
import { PASSIONS_NUM_TO_COLORS } from '@/features/common/constant'
import style from '@/styles/features/top/top.module.scss'
import { axiosClient } from '@/utils/libs/axios'
import Link from 'next/link'

type SessionsResponse = {
  items: {
    id: number
    user_name: string
    title: string
    tags: string[]
    content: string
    passion_level: number
    created_at: string
  }[]
  total: number
  per_page: number
  current_page: number
  last_page: number
}

type TagsResponse = {
  id: number
  tag_name: string
}[]

async function getServerSideProps(page: number) {
  const sessionsData = (await axiosClient.get<SessionsResponse>(`sessions?page=${page}`)).data
  const tagsData = (await axiosClient.get<TagsResponse>('tags')).data
  return { sessionsData, tags: tagsData }
}

export default async function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams.page ? Number(searchParams.page) : 1
  const { sessionsData, tags } = await getServerSideProps(page)
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
          <Link href={'/session/register'}>
            <BasicButton
              color='success'
              variant='contained'
              text='セッションを募集する'
              width='100%'
              className='-shadow'
            />
          </Link>
          <div className={style['card-container']}>
            {sessionsData.items.map((session, index) => (
              <Link key={index} href={`/session/${session.id}`}>
                <SessionCard
                  userName={session.user_name}
                  title={session.title}
                  tags={session.tags}
                  content={session.content}
                  width='100%'
                  color={PASSIONS_NUM_TO_COLORS[session.passion_level]}
                />
              </Link>
            ))}
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
