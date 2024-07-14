import { axiosClient } from '@/utils/libs/axios'

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
    const url = `tags?count=${request.count}`
    const res = await axiosClient.get<TagResponse>(url)

    return res.data
  }

  return { fetcher }
}
