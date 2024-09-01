import { useAtom } from 'jotai'
import { snackbarAtom } from '@/utils/libs/stores/snackbar'
import { AxiosResponse } from 'axios'
// import { CustomResponseStatus } from '@/utils/types/common'

export const useSnackbar = () => {
  const [snackBar, setSnackBar] = useAtom(snackbarAtom)

  const closeSnackbar = () => {
    setSnackBar((prev) => ({
      isOpen: false,
      status: prev.status,
      title: ''
    }))
  }

  const openSnackbar = (params: { status: number; title: string }) => {
    const { status, title } = params

    setSnackBar({
      isOpen: true,
      status,
      title
    })

    setTimeout(() => {
      closeSnackbar()
    }, 5000)
  }

  const handleSnackbar = (res: AxiosResponse) => {
    if (res.status === 200) {
      openSnackbar({
        status: res.status,
        title: res.statusText
      })
    } else {
      openSnackbar({
        status: res.status,
        title: res.statusText
      })
    }
  }

  return {
    snackBar,
    openSnackbar,
    closeSnackbar,
    handleSnackbar
  }
}
