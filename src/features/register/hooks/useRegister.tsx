'use client'

import {
  RegisterFormType,
  registerDefaultValues,
  registerFormType
} from '@/features/register/hooks/formSchema'
import { axiosClient } from '@/utils/libs/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

export const useRegister = () => {
  const form = useForm<RegisterFormType>({
    mode: 'onChange',
    defaultValues: registerDefaultValues,
    shouldFocusError: false,
    resolver: zodResolver(registerFormType)
  })

  const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
    axiosClient.post('sessions/register', formData).then(() => {
      window.location.href = '/'
    })
  }

  return { form, onSubmit }
}
