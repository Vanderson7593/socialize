import { Flex, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { theme } from '@theme'
import { FC } from 'react'
import { color } from 'styled-system'
import Avatar from '../avatar'
import { TextWrapper } from './message.styles'

const Message: FC<{ isReceived?: boolean; bg?: string }> = ({ isReceived }) => {
  const { colors } = useTheme()
  const renderAvatar = () => <Avatar src="/val.jpg" width={30} height={30} />
  const renderText = () => <Text isReceived={isReceived}>Olá Vanderson Telema Dev</Text>

  const styles = {
    borderRadius: 20,
    padding: 5,
  } as const

  return (
    <>
      {isReceived ? (
        <Flex alignItems="center" style={{ gap: 10 }}>
          <View>{renderAvatar()}</View>
          <View>{renderText()}</View>
        </Flex>
      ) : (
        <Flex alignItems="center" style={{ gap: 10 }}>
          <View>{renderText()}</View>
          <Flex style={styles}>{renderAvatar()}</Flex>
        </Flex>
      )}
    </>
  )
}
export default Message
