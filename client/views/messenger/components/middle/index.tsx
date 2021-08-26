import { Avatar, Divider, Online } from '@components'
import { Flex, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { FC } from 'react'
import Footer from './components/footer'
import Messages from './components/messages'

const Middle: FC = () => {
  const { colors, fontSizes } = useTheme()
  return (
    <Flex
      flexDirection="column"
      width={['100vw', '100vw', '100vw', '900px']}
      p={['10%', '8%', '6%', '2%']}
      style={{ gap: 10 }}
    >
      <Flex alignItems={['center']} style={{ gap: 10 }}>
        <Flex>
          <Avatar src="/me.jpg" width={56} height={56} alt="user-profile-image" />
        </Flex>
        <Flex alignItems={['center']} style={{ gap: 10 }}>
          <Text fontWeight="500" fontSize={fontSizes.Large} color={colors.GREY_DARK}>
            Vanderson Telema Dev
          </Text>
          <Online />
        </Flex>
      </Flex>
      <View>
        <Divider />
      </View>
      <View>
        <Messages />
      </View>
      <View>
        <Footer />
      </View>
    </Flex>
  )
}

export default Middle
