import { SnackbarType } from '@/utils/libs/stores/snackbar'
import { Alert, Snackbar } from '@mui/material'

type Props = {
  snackbar: SnackbarType
  onClose: () => void
}

export const SnackBar = ({ snackbar, onClose }: Props) => {
  const { isOpen, status, title } = snackbar
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      onClose={onClose}
    >
      <Alert
        severity={status === 200 ? 'success' : 'error'}
        variant='filled'
        sx={{ width: '100%' }}
      >
        {title}
      </Alert>
    </Snackbar>
  )
}
