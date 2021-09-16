import { RefObject } from 'react'

export interface InputProps {
  // eslint-disable-next-line
  icon?: JSX.Element
  placeholder?: string
  bgColor?: string
  isTextArea?: boolean
  innerRef?: RefObject<any>
}
