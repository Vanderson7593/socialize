import { Input } from '@components'
import { Flex, Heading, View } from '@elements'
import { useTheme } from '@emotion/react'
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
      <Heading color={colors.BLUE} as="h3">
        Welcome to socialize
      </Heading>
      <View>
        <Input placeholder="Email" bgColor={colors.FOREGROUND} />
      </View>
      <View />
    </Flex>
  )
}
export default Login
