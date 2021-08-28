import { Input } from '@components'
import { Flex, Heading, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { ArrowRightCircle } from '@svgs'
import { FC } from 'react'
import Link from 'next/link'

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
        Welcome back! <br />
        Login to start texting!
      </Heading>
      <View>
        <Text>Username</Text>
        <Input placeholder="Username" bgColor={colors.FOREGROUND} />
      </View>
      <View mt="-28px">
        <Text>Password</Text>
        <Input placeholder="Password" bgColor={colors.FOREGROUND} />
      </View>
      <View>
        <ArrowRightCircle />
      </View>
      <View style={{ cursor: 'pointer' }}>
        <Link href="#register">
          <Heading color={colors.BLUE}>Create new account</Heading>
        </Link>
      </View>
    </Flex>
  )
}
export default Login
