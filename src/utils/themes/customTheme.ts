import { grey } from '@mui/material/colors'

export interface ColorLevel {
  light?: string
  main: string
  dark?: string
}

const color = {
  background: {
    grey: {
      main: grey[600],
      light: grey[300],
      dark: grey[800]
    }
  }
}

export const bgColor = color.background
