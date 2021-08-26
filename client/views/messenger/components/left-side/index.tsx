import { Avatar, Input } from '@components'
import { Flex, Heading, Text } from '@elements'
import { useTheme } from '@emotion/react'
import { Search } from '@svgs'
import { FC } from 'react'
import Chat from './components/chat'

const LeftSide: FC = () => {
  const { colors } = useTheme()

  return (
    <Flex
      flexDirection="column"
      alignItems={['center', 'center', 'center', 'flex-start']}
      backgroundColor={colors.FOREGROUND}
      width={['100vw', '100vw', '100vw', '700px']}
      p={['10%', '8%', '6%', '2%']}
      style={{ gap: 60 }}
    >
      <Flex
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={['center', 'center', 'center', 'center']}
        style={{ gap: 10 }}
      >
        <Flex>
          <Avatar src="/me.jpg" width={90} height={90} alt="user-profile-image" />
        </Flex>
        <Flex flexDirection="column" alignItems={['center', 'center', 'center', 'flex-start']}>
          <Heading color={colors.BLUE} as="h4">
            Vanderson Telema
          </Heading>
          <Text>Developer</Text>
        </Flex>
      </Flex>
      <Flex width={['100%', '100%', '60%', '100%']}>
        <Input placeholder="Pesquisar amigos" icon={<Search />} />
      </Flex>
      <Flex flexDirection="column" style={{ gap: 30 }}>
        <Chat isReaded c />
        <Chat isReaded={false} c={false} />
        <Chat isReaded c />
        <Chat isReaded={false} c />
        <Chat isReaded={false} c />
      </Flex>
    </Flex>
  )
}

export default LeftSide
