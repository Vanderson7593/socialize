import { Avatar, Badge, Input, Online } from '@components'
import { Flex, Heading, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { Search } from '@svgs'
import { useSocketContext } from 'client/context/socket-context'
import { signOut, useSession } from 'next-auth/client'
import { FC } from 'react'
import { v4 } from 'uuid'
import Chat from './components/chat'

const Messages: FC = () => {
  const { colors } = useTheme()
  const { logOut, socket, users, session } = useSocketContext()

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
          <Heading onClick={logOut} color={colors.BLUE} as="h4">
            {session?.user.name}
          </Heading>
        </Flex>
      </Flex>
      <Flex flexDirection="column" style={{ gap: 10 }} width="100%">
        {/* <Input placeholder="Search for friends" icon={<Search />} /> */}
        <Flex style={{ gap: 6 }} alignItems="center" alignSelf="flex-start">
          <Text>Connected users</Text>
          <Online />
        </Flex>
      </Flex>
      <Flex flexDirection="column" width="100%" style={{ gap: 20 }}>
        {users.map(user => {
          if (user.id === session?.user.id) {
            return null
          }
          return <Chat key={v4()} {...user} />
        })}
      </Flex>
    </Flex>
  )
}

export default Messages
