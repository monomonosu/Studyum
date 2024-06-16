import { urlFormatSchema, requiredStringSchema } from '@/utils/helpers/genericSchema'
import { z } from 'zod'

export const registerDefaultValues = {
  name: '',
  title: '',
  tags: [],
  platform: '1',
  url: '',
  passion: '1',
  comment: ''
}

export const registerFormType = z.object({
  name: requiredStringSchema('ユーザー名'),
  title: requiredStringSchema('タイトル'),
  tags: z.array(
    z.object({ label: z.string(), value: z.string(), __isNew__: z.boolean().optional() })
  ),
  platform: requiredStringSchema('プラットフォーム'),
  url: z.string().refine(urlFormatSchema.regex, urlFormatSchema.message()),
  passion: requiredStringSchema('ガチ度'),
  comment: z.string()
})

export type RegisterFormType = z.infer<typeof registerFormType>
