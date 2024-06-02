export const PASSIONS_NUM_TO_COLORS: { [key: number]: Color } = {
  1: 'primary',
  2: 'success',
  3: 'error'
} as const

export const PASSIONS_NUM_TO_TEXT: { [key: number]: string } = {
  1: 'わいわい😊',
  2: 'もくもく😐',
  3: 'ガチガチ😤'
} as const

export const PASSIONS = {
  PASSION_LOW: 1,
  PASSION_MIDDLE: 2,
  PASSION_HIGHT: 3
}
