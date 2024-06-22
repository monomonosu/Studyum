import {
  urlFormatSchema,
  requiredStringSchema,
  maxStringSchema
} from '@/utils/helpers/genericSchema'
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
  name: maxStringSchema('ユーザー名', 20),
  title: maxStringSchema('タイトル', 50),
  tags: z
    .array(z.object({ label: z.string(), value: z.string(), __isNew__: z.boolean().optional() }))
    .refine((tags) => tags.length < 6, { message: '選択できるタグは５つまでです' }),
  platform: requiredStringSchema('プラットフォーム'),
  url: maxStringSchema('URL', 300, true).refine(urlFormatSchema.regex, urlFormatSchema.message()),
  password: maxStringSchema('パスワード', 50, true),
  passion: requiredStringSchema('ガチ度'),
  comment: maxStringSchema('コメント', 1000, true)
})

export type RegisterFormType = z.infer<typeof registerFormType>
