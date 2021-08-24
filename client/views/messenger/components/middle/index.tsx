import { Avatar, Divider, Message, Online } from '@components'
import { Flex, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { FC } from 'react'

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
            Vanderson Telema
          </Text>
          <Online />
        </Flex>
      </Flex>
      <View>
        <Divider />
      </View>
      <View>
        <Divider text="Tomorrow" />
      </View>
      <Flex justifyContent="space-between">
        {[{ isReceived: true }, { isReceived: false }].map(({ isReceived }, index) => (
          <Flex flexDirection="column">
            {index !== 0 && <View mb={50} />}
            <Message isReceived={isReceived} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default Middle
