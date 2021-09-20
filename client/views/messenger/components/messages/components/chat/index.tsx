import { Avatar, Badge } from '@components'
import { Flex, Heading, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { Check } from '@svgs'
import { IMessage, IUser } from '@types'
import { FC } from 'react'

const Chat: FC<IUser> = ({ messages = [], name }) => {
  const { colors } = useTheme()

  const lastMessage = messages[messages.length - 1]

  return (
    <View height={70} style={{ cursor: 'pointer' }}>
      <Flex>
        <Flex flex={1} style={{ gap: 10 }}>
          <Avatar src="/van.jpg" width={50} height={50} />
          <Flex
            flexDirection="column"
            style={{ gap: 4 }}
            width={306}
            height={70}
            overflowY="hidden"
          >
            <Heading color={colors.BLUE}>{name}</Heading>
            {!lastMessage ? <Text>No messages</Text> : <Text>{lastMessage?.content}</Text>}
          </Flex>
        </Flex>
        {/* <Flex flex={2} justifyContent="flex-end" position="relative">
          <Text>10:34 AM</Text>
          <View position="absolute" top={20} right={0}>
            {isReaded ? <Badge>1</Badge> : c ? <Check /> : <Check stroke={colors.BLUE} />}
          </View>
        </Flex> */}
      </Flex>
    </View>
  )
}

export default Chat
