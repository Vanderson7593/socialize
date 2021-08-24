import { Flex, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { theme } from '@theme'
import { FC } from 'react'
import { color } from 'styled-system'
import Avatar from '../avatar'
import { TextWrapper } from './message.styles'

const Message: FC<{ isReceived?: boolean; bg?: string; isLastOne: boolean }> = ({
  isReceived,
  isLastOne,
}) => {
  const { colors } = useTheme()
  const renderAvatar = () => (
    <View>
      {isLastOne ? (
        <Avatar src="/val.jpg" width={30} height={30} />
      ) : (
        <View width={30} height={30} />
      )}
    </View>
  )

  const renderText = () => (
    <View>
      <TextWrapper isLastOne={isLastOne} isReceived={isReceived as boolean}>
        Olá Vanderson
      </TextWrapper>
    </View>
  )

  return (
    <>
      {isReceived ? (
        <Flex alignItems="flex-end" style={{ gap: 10 }}>
          <View>{renderAvatar()}</View>
          <View>{renderText()}</View>
        </Flex>
      ) : (
        <Flex alignItems="flex-end" style={{ gap: 10 }}>
          <View>{renderText()}</View>
          <View>{renderAvatar()}</View>
        </Flex>
      )}
    </>
  )
}
export default Message
