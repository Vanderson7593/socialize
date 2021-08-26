import { Flex, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { theme } from '@theme'
import { FC } from 'react'
import { color } from 'styled-system'
import Avatar from '../avatar'
import { MessageWrapper, TextWrapper } from './message.styles'

const Message: FC<{ isReceived: boolean; isLastOne: boolean }> = ({ isReceived, isLastOne }) => {
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
        <MessageWrapper>
          <View>{renderAvatar()}</View>
          <View>{renderText()}</View>
        </MessageWrapper>
      ) : (
        <MessageWrapper>
          <View>{renderText()}</View>
          <View>{renderAvatar()}</View>
        </MessageWrapper>
      )}
    </>
  )
}
export default Message
