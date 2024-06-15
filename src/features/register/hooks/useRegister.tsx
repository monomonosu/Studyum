'use client'

import {
  RegisterFormType,
  registerDefaultValues,
  registerFormType
} from '@/features/register/hooks/formSchema'
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
    console.log(formData)
  }

  return { form, onSubmit }
}
