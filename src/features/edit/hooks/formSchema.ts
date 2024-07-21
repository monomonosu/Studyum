// TODO:登録も編集も同じスキーマを使うので、ディレクトリ構成変更も行い共通化する。

import {
  urlFormatSchema,
  requiredStringSchema,
  maxStringSchema
} from '@/utils/helpers/genericSchema'
import { z } from 'zod'

export const editDefaultValues = {
  user_name: '',
  title: '',
  tags: [],
  platform: '1',
  url: '',
  passion_level: '1',
  comment: ''
}

export const editFormType = z.object({
  user_name: maxStringSchema('ユーザー名', 20),
  title: maxStringSchema('タイトル', 50),
  tags: z
    .array(z.object({ label: z.string(), value: z.string(), __isNew__: z.boolean().optional() }))
    .refine((tags) => tags.length < 6, { message: '選択できるタグは５つまでです' }),
  platform: requiredStringSchema('プラットフォーム'),
  url: maxStringSchema('URL', 300, true).refine(urlFormatSchema.regex, urlFormatSchema.message()),
  password: maxStringSchema('パスワード', 50),
  passion_level: requiredStringSchema('ガチ度'),
  content: maxStringSchema('コメント', 1000, true)
})

export type EditFormType = z.infer<typeof editFormType>
