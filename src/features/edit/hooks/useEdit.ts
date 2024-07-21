import { useGetSessionDetail } from '@/features/edit/api/getSessionDetail'
import { editDefaultValues, editFormType, EditFormType } from '@/features/edit/hooks/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'

export const useEdit = () => {
  const params = useParams()
  const { fetcher: getSessionDetail } = useGetSessionDetail()

  const { session_id } = params
  const { data: sessionDetail } = useSWR(`sessions/${session_id}`, () =>
    getSessionDetail({ id: Number(session_id) })
  )

  const form = useForm<EditFormType>({
    mode: 'onChange',
    defaultValues: editDefaultValues,
    values: {
      title: sessionDetail?.title ?? '',
      user_name: sessionDetail?.user_name ?? '',
      tags: sessionDetail?.tags
        ? sessionDetail?.tags.map((tag) => {
            return {
              value: String(tag.id),
              label: tag.name
            }
          })
        : [],
      platform: String(sessionDetail?.platform) ?? '',
      url: sessionDetail?.url ?? '',
      passion_level: String(sessionDetail?.passion_level) ?? '',
      content: sessionDetail?.content ?? '',
      password: ''
    },
    shouldFocusError: false,
    resolver: zodResolver(editFormType)
  })

  return {
    sessionDetail,
    form
  }
}
