'use client'

import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material'
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { useState } from 'react'

type Props = {
  isOpen: boolean
  status: number
  title: string
}

export const SnackBar = ({ isOpen, title, status }: Props) => {
  const [open, setOpen] = useState(isOpen)

  const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      onClose={handleClose}
    >
      <Alert
        icon={status === 200 ? <TaskAltIcon /> : <DoDisturbAltIcon />}
        severity={status === 200 ? 'success' : 'error'}
        variant='filled'
        sx={{ width: '100%' }}
      >
        {title}
      </Alert>
    </Snackbar>
  )
}
