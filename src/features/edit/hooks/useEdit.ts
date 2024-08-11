import { useGetSessionDetail } from '@/features/edit/api/getSessionDetail'
import { editDefaultValues, editFormType, EditFormType } from '@/features/edit/hooks/formSchema'
import { useGetTags } from '@/features/register/api/getTags'
import { axiosClient } from '@/utils/libs/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'

export const useEdit = () => {
  const params = useParams()
  const { fetcher: getSessionDetail } = useGetSessionDetail()
  const { fetcher: getTags } = useGetTags()

  const { session_id } = params
  const { data: sessionDetail } = useSWR(`sessions/${session_id}`, () =>
    getSessionDetail({ id: Number(session_id) })
  )
  const { data: tagList } = useSWR(`tags`, () => getTags({ count: 10 }))

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

  const tagOptions = useMemo(() => {
    if (!tagList) return []

    return tagList.map((tag) => {
      return {
        label: tag.name,
        value: String(tag.id)
      }
    })
  }, [tagList])

  const onSubmit = async (formData: EditFormType) => {
    const formatData = {
      ...formData,
      tags: formData.tags.map((tag) => {
        return {
          id: Number(tag.value),
          name: tag.label
        }
      })
    }

    axiosClient.put(`sessions/${session_id}`, formatData).then(() => {
      window.location.href = '/'
    })
  }

  return {
    form,
    onSubmit,
    tagOptions
  }
}
