import { Input } from '@components'
import { Flex, Heading, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { ArrowRightCircle } from '@svgs'
import { FC } from 'react'

const Login: FC = () => {
  const { colors } = useTheme()
  return (
    <Flex
      style={{ gap: 30 }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Heading textAlign="center" color={colors.BLUE} as="h3">
        Welcome back!
        <br />
        Start texting!
      </Heading>
      <View>
        <Text>Username</Text>
        <Input placeholder="Username" bgColor={colors.FOREGROUND} />
      </View>
      <View>
        <ArrowRightCircle />
      </View>
    </Flex>
  )
}
export default Login
