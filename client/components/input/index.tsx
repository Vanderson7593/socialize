import { FC } from 'react'
import { Flex, Input as InputElement } from '@elements'
import { theme } from '@theme'
import { InputProps } from './input.types'

const Input: FC<InputProps> = ({ icon, placeholder, bgColor }) => (
  <Flex alignItems="center">
    {icon && icon}
    <InputElement placeholder={placeholder} bg={bgColor || theme.colors.WHITE} />
  </Flex>
)

export default Input
