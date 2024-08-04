// TODO:登録も編集も同じスキーマを使うので、ディレクトリ構成変更も行い共通化する。

import { maxStringSchema } from '@/utils/helpers/genericSchema'
import { z } from 'zod'

export const deleteDefaultValues = {
  password: ''
}

export const deleteFormType = z.object({
  password: maxStringSchema('パスワード', 50)
})

export type DeleteFormType = z.infer<typeof deleteFormType>
