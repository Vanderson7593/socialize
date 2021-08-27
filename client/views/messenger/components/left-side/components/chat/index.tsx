import { Avatar, Badge } from '@components'
import { Flex, Heading, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { Check } from '@svgs'
import { FC } from 'react'

const Chat: FC<{ isReaded: boolean; c: boolean }> = ({ isReaded, c }) => {
  const { colors } = useTheme()

  return (
    <View style={{ cursor: 'pointer' }}>
      <Flex>
        <Flex flex={1} style={{ gap: 10 }}>
          <Avatar src="/van.jpg" width={70} height={70} />
          <Flex flexDirection="column" style={{ gap: 4 }} width={306}>
            <Heading color={colors.BLUE}>Vanderson Telema</Heading>
            <Text>Nós estamos usando, styled-system e @emotion styled!</Text>
          </Flex>
        </Flex>
        <Flex flex={2} justifyContent="flex-end" position="relative">
          <Text>10:34 AM</Text>
          <View position="absolute" top={20} right={0}>
            {isReaded ? <Badge>1</Badge> : c ? <Check /> : <Check stroke={colors.BLUE} />}
          </View>
        </Flex>
      </Flex>
    </View>
  )
}

export default Chat
