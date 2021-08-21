import { Flex, Heading, Text } from '@elements'
import { theme } from '@theme'
import Avatar from 'client/components/avatar'
import { FC } from 'react'

const LeftSide: FC = () => (
  <Flex
    flexDirection={['column', 'column', 'column', 'row']}
    alignItems={['center', 'center', 'center', 'center']}
    justifyContent={['center', 'center', 'center', 'left']}
    style={{ gap: 10 }}
    backgroundColor={theme.colors.FOREGROUND}
    width={['100vw', '100vw', '100vw', '500px']}
    p={['10%', '8%', '6%', '4%']}
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
)

export default LeftSide
