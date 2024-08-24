import { atom } from 'jotai'

export type Loading = boolean

export const loadingInitValue: Loading = false
export const loadingAtom = atom(loadingInitValue)
