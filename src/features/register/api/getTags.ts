import { axiosClient } from '@/utils/libs/axios'
import { stringify } from 'querystring'

type Tag = {
  id: number
  name: string
}

export type TagRequest = {
  count?: number | null
}

type TagResponse = Tag[]

/**
 * 施設 法人アカウントの一覧情報を取得する
 */
export const useGetTags = () => {
  const fetcher = async (request: TagRequest) => {
    const url = `tags?${stringify(request)}`
    const res = await axiosClient.get<TagResponse>(url)

    return res.data
  }

  return { fetcher }
}
