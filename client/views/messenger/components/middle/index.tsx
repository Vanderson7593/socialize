import { Avatar, Divider, Message, Online } from '@components'
import { Flex, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { FC } from 'react'
import { v4 } from 'uuid'

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
        <Divider text="Today" />
      </View>
      <Flex flexDirection="column">
        {[
          { isReceived: true, isLastOne: true },
          { isReceived: false, isLastOne: false },
          { isReceived: false, isLastOne: true },
        ].map(({ isReceived, isLastOne }, index) => (
          <Flex
            key={v4()}
            flexDirection="column"
            alignSelf={`${isReceived ? 'flex-start' : 'flex-end'}`}
          >
            {index !== 0 && <View mb={10} />}
            <Message isLastOne={isLastOne} isReceived={isReceived} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default Middle
