import GoogleMeet from '/public/icons/meet.svg'
import Skype from '/public/icons/skype.svg'
import Zoom from '/public/icons/zoom.svg'
import Discord from '/public/icons/discord.svg'

export const PASSIONS_NUM_TO_COLORS: { [key: number]: Color } = {
  1: 'primary',
  2: 'success',
  3: 'error'
} as const

export const PASSIONS_NUM_TO_TEXT: { [key: number]: string } = {
  1: '😊わいわい',
  2: '😐もくもく',
  3: '😤ガチガチ'
} as const

export const PLATFORM_NUM_TO_TEXT_ICON: { [key: number]: { icon: JSX.Element; label: string } } = {
  1: { icon: <GoogleMeet />, label: 'GoogleMeet' },
  2: { icon: <Skype />, label: 'Skype' },
  3: { icon: <Zoom />, label: 'Zoom' },
  4: { icon: <Discord />, label: 'Discord' }
} as const

export const PASSIONS = {
  PASSION_LOW: 1,
  PASSION_MIDDLE: 2,
  PASSION_HIGHT: 3
}

export const PASSION_OPTIONS = [
  {
    value: '1',
    label: '😊わいわい'
  },
  {
    value: '2',
    label: '😐もくもく'
  },
  {
    value: '3',
    label: '😤ガチガチ'
  }
]

export const PLATFORM_OPTIONS = [
  {
    value: '1',
    label: 'GoogleMeet',
    icon: <GoogleMeet />
  },
  {
    value: '2',
    label: 'Skype',
    icon: <Skype />
  },
  {
    value: '3',
    label: 'Zoom',
    icon: <Zoom />
  },
  {
    value: '4',
    label: 'Discord',
    icon: <Discord />
  }
]
