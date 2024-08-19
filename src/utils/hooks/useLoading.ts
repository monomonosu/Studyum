import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { loadingAtom } from '@/utils/libs/stores/loading'

export const useWholeLoading = () => {
  const [isLoading, setIsLoading] = useAtom(loadingAtom)

  const setLoading = useCallback((isLoading: boolean) => setIsLoading(isLoading), [setIsLoading])

  return {
    isLoading,
    setLoading
  }
}
