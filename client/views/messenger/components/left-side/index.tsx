import { Avatar, Input } from '@components'
import { Flex, Heading, Text } from '@elements'
import { Search } from '@svgs'
import { theme } from '@theme'
import { FC } from 'react'

const LeftSide: FC = () => (
  <Flex
    flexDirection="column"
    alignItems={['center', 'center', 'center', 'flex-start']}
    backgroundColor={theme.colors.FOREGROUND}
    width={['100vw', '100vw', '100vw', '500px']}
    p={['10%', '8%', '6%', '2%']}
    style={{ gap: 60 }}
  >
    <Flex
      flexDirection={['column', 'column', 'column', 'row']}
      alignItems={['center', 'center', 'center', 'center']}
      style={{ gap: 10 }}
    >
      <Flex>
        <Avatar src="/me.jpg" width={100} height={100} alt="user-profile-image" />
      </Flex>
      <Flex
        flexDirection="column"
        alignItems={['center', 'center', 'center', 'flex-start']}
        textAlign="center"
      >
        <Heading as="h4">Vanderson Telema</Heading>
        <Text>Developer</Text>
      </Flex>
    </Flex>
    <Flex width={['100%', '100%', '60%', '100%']}>
      <Input placeholder="Pesquisar amigos" icon={<Search />} />
    </Flex>
  </Flex>
)

export default LeftSide
