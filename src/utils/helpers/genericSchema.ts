import { RegExp_URL } from '@/utils/constants/regularExpression'
import { URL_FORMAT_TEXT, REQUIRED_TEXT } from '@/utils/constants/validationMassages'
import { z } from 'zod'

type RegExpList = { [key: string]: RegExp }

/**
 * @name 必須項目文字数制限なし
 */
export const requiredStringSchema = (name: string) => {
  return z.string().trim().min(1, REQUIRED_TEXT(name))
}

/**
 * @name 必須項目文字数制限なし(number型)
 */
export const requiredNumberSchema = (name: string) => {
  return z.number().min(1, REQUIRED_TEXT(name))
}

/**
 * @name 正規表現生成関数
 * @description RegularExpression.tsの正規表現をグループ化
 */
export const generateRegExp = (checkList: RegExpList) => {
  const items = Object.values(checkList).map((item) => {
    return item.source
  })

  return new RegExp(`^(${items.join('|')})*$`)
}

/**
 * @name メールアドレス形式
 */
export const urlFormatSchema = {
  regex: (text: string) => {
    const checkList = { RegExp_URL: RegExp_URL }
    const RegExp = generateRegExp(checkList)

    return RegExp.test(text)
  },
  message: () => URL_FORMAT_TEXT()
}
