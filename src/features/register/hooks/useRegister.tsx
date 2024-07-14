'use client'

import { useGetTags } from '@/features/register/api/getTags'
import {
  RegisterFormType,
  registerDefaultValues,
  registerFormType
} from '@/features/register/hooks/formSchema'
import { axiosClient } from '@/utils/libs/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useSWR from 'swr'

export const useRegister = () => {
  const { fetcher } = useGetTags()
  const { data: tagList } = useSWR(`tags`, () => fetcher({ count: 10 }))

  const form = useForm<RegisterFormType>({
    mode: 'onChange',
    defaultValues: registerDefaultValues,
    shouldFocusError: false,
    resolver: zodResolver(registerFormType)
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

  const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
    console.log(formData)
    axiosClient.post('sessions/register', formData).then(() => {
      window.location.href = '/'
    })
  }

  return { form, onSubmit, tagOptions }
}
