import { createTheme } from '@mui/material/styles'
import { blue, green, red } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      light: blue[300],
      dark: blue[800]
    },
    success: {
      main: green[600],
      light: green[300],
      dark: green[800]
    },
    error: {
      main: red[600],
      light: red[300],
      dark: red[800]
    }
  }
})
