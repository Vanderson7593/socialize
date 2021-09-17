import { Avatar, Input } from '@components'
import { Flex, Heading } from '@elements'
import { useTheme } from '@emotion/react'
import { Search } from '@svgs'
import { signOut } from 'next-auth/client'
import { FC } from 'react'
import Chat from './components/chat'

const Messages: FC = () => {
  const { colors } = useTheme()

  return (
    <Flex
      flexDirection="column"
      alignItems={['center', 'center', 'center', 'flex-start']}
      backgroundColor={colors.FOREGROUND}
      width={['100vw', '100vw', '100vw', '700px']}
      p={['10%', '4%', '6%', '2%']}
      style={{ gap: 60 }}
    >
      <Flex
        flexDirection={['column', 'column', 'row', 'row']}
        alignItems="center"
        style={{ gap: 10 }}
      >
        <Flex>
          <Avatar src="/me.jpg" width={90} height={90} alt="user-profile-image" />
        </Flex>
        <Flex>
          <Heading onClick={() => signOut()} color={colors.BLUE} as="h4">
            Vanderson Telema
          </Heading>
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

export default Messages
