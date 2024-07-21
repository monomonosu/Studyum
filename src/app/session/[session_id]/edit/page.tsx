'use client'
import { useEdit } from '@/features/edit/hooks/useEdit'

export default function Edit() {
  const { sessionDetail, form } = useEdit()
  console.log(sessionDetail)
  console.log(form.getValues())
  return <p>edit page</p>
}
