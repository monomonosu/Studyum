import { styled } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { bgColor } from '@/utils/themes/customTheme'

const LoaderWrapper = styled('div')`
  background: rgba(0, 0, 0, 0.5);
  color: ${bgColor.grey.light};
  display: grid;
  height: 100%;
  left: 0;
  place-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
`

const CustomMuiCircularProgress = styled(CircularProgress)`
  color: inherit;

  &.MuiCircularProgress-root {
    height: 100px !important;
    width: 100px !important;
  }
`

export const Loader = () => {
  return (
    <LoaderWrapper>
      <CustomMuiCircularProgress />
    </LoaderWrapper>
  )
}
