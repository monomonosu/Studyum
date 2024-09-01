import { useAtomValue } from 'jotai'
import type { Meta, StoryObj } from '@storybook/react'
import { SnackBar } from '@/components/Atoms/SnackBar'
import { useSnackbar } from '@/utils/hooks/useSnackbar'
import { snackbarAtom } from '@/utils/libs/stores/snackbar'

const meta: Meta<typeof SnackBar> = {
  title: 'Uis/Atoms/Snackbar',
  component: SnackBar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof SnackBar>

export const Base: Story = {
  render: function Comp() {
    const { openSnackbar, closeSnackbar } = useSnackbar()
    const snackBar = useAtomValue(snackbarAtom)

    return (
      <>
        <button
          onClick={() =>
            openSnackbar({
              status: 200,
              title: '成功'
            })
          }
          type='button'
        >
          表示
        </button>
        {snackBar.isOpen && <SnackBar snackbar={{ ...snackBar }} onClose={closeSnackbar} />}
      </>
    )
  }
}

export const Error: Story = {
  render: function Comp() {
    const { openSnackbar, closeSnackbar } = useSnackbar()
    const snackBar = useAtomValue(snackbarAtom)

    return (
      <>
        <button
          onClick={() =>
            openSnackbar({
              status: 500,
              title: '失敗'
            })
          }
          type='button'
        >
          表示
        </button>
        {snackBar.isOpen && <SnackBar snackbar={{ ...snackBar }} onClose={closeSnackbar} />}
      </>
    )
  }
}
