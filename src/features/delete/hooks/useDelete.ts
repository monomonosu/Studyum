import {
  deleteDefaultValues,
  deleteFormType,
  DeleteFormType
} from '@/features/delete/hooks/formSchema'
import { useGetSessionDetail } from '@/features/edit/api/getSessionDetail'
import { useAxiosLoading } from '@/utils/hooks/useAxiosLoading'
import { axiosClient } from '@/utils/libs/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'

export const useDelete = () => {
  const params = useParams()
  const { isAxiosLoading, setAxiosLoading } = useAxiosLoading()
  const { fetcher: getSessionDetail } = useGetSessionDetail()

  const { session_id } = params
  const { data: sessionDetail } = useSWR(`sessions/${session_id}`, () =>
    getSessionDetail({ id: Number(session_id) })
  )

  const form = useForm<DeleteFormType>({
    mode: 'onChange',
    defaultValues: deleteDefaultValues,
    shouldFocusError: false,
    resolver: zodResolver(deleteFormType)
  })

  const onSubmit = async (formData: DeleteFormType) => {
    setAxiosLoading(true)
    axiosClient.post(`sessions/delete/${session_id}`, formData).then((res) => {
      window.location.href = `/?success=true&message=${res.data.message}&status=${res.status}`
    })
  }

  return { isAxiosLoading, sessionDetail, form, onSubmit }
}
