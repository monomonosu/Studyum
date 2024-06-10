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
  1: 'わいわい😊',
  2: 'もくもく😐',
  3: 'ガチガチ😤'
} as const

export const PASSIONS = {
  PASSION_LOW: 1,
  PASSION_MIDDLE: 2,
  PASSION_HIGHT: 3
}

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
