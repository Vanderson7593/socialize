import { FC } from 'react'
import { Flex, Input as InputElement, TextArea } from '@elements'
import { theme } from '@theme'
import { InputProps } from './input.types'

const Input: FC<InputProps> = ({ icon, placeholder, bgColor, isTextArea, innerRef }) => (
  <Flex
    width="100%"
    bg={bgColor || theme.colors.WHITE}
    alignItems="center"
    justifyContent="center"
    px={3}
    py={1}
    borderRadius={25}
  >
    {isTextArea ? (
      <TextArea ref={innerRef} placeholder={placeholder} />
    ) : (
      <>
        {icon && icon}
        <InputElement ref={innerRef} placeholder={placeholder} />
      </>
    )}
  </Flex>
)

export default Input
