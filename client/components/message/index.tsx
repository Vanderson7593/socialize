import { Flex, Text, View } from '@elements'
import { theme } from '@theme'
import { FC } from 'react'
import Avatar from '../avatar'
import { TextWrapper } from './message.styles'

const Message: FC<{ isReceived?: boolean; bg?: string }> = ({ isReceived }) => {
  const renderAvatar = () => <Avatar src="/val.jpg" width={30} height={30} />
  const renderText = () => (
    <Text bg={isReceived ? theme.colors.FOREGROUND : theme.colors.BLUE}>
      <Text>Olá Vanderson Telema</Text>
    </Text>
  )

  return (
    <>
      {isReceived ? (
        <Flex style={{ gap: 12 }}>
          <View>{renderAvatar()}</View>
          <TextWrapper>{renderText()}</TextWrapper>
        </Flex>
      ) : (
        <Flex style={{ gap: 12 }}>
          <TextWrapper>{renderText()}</TextWrapper>
          <Flex>{renderAvatar()}</Flex>
        </Flex>
      )}
    </>
  )
}
export default Message
