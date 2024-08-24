import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { loadingAtom } from '@/utils/libs/stores/loading'

export const useAxiosLoading = () => {
  const [isAxiosLoading, setIsAxiosLoading] = useAtom(loadingAtom)

  const setAxiosLoading = useCallback(
    (isLoading: boolean) => setIsAxiosLoading(isLoading),
    [setIsAxiosLoading]
  )

  return {
    isAxiosLoading,
    setAxiosLoading
  }
}
