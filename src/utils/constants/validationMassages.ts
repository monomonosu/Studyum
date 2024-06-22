/**
 * @name 入力必須
 * @return 〇〇は必須項目です。
 */
export const REQUIRED_TEXT = (name: string) => `${name}は必須項目です。`

/**
 * @name 最大文字数制限
 * @return 〇〇は〇〇文字以内で入力してください。
 */
export const MAX_LENGTH_TEXT = (name: string, max: number) =>
  `${name}は${max}文字以内で入力してください。`

/**
 * @name URL形式
 * @return URL形式で入力してください。
 */
export const URL_FORMAT_TEXT = () => `URL形式で入力してください。`
