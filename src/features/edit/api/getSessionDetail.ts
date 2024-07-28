import { axiosClient } from '@/utils/libs/axios'

type SessionDetail = {
  id: number
  title: string
  user_name: string
  tags: { id: number; name: string }[]
  platform: number
  url: string
  passion_level: number
  content: string
  created_at: string
}

export type SessionDetailRequest = {
  id: number
}

export type SessionDetailResponse = SessionDetail

/**
 * 施設 法人アカウントの一覧情報を取得する
 */
export const useGetSessionDetail = () => {
  const fetcher = async (request: SessionDetailRequest) => {
    const url = `sessions/${request.id}`
    const res = await axiosClient.get<SessionDetailResponse>(url)

    return res.data
  }

  return { fetcher }
}
