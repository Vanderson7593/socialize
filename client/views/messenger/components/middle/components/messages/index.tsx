import { Message } from '@components'
import { Flex, View } from '@elements'
import { FC } from 'react'
import { v4 } from 'uuid'

const MESSAGES_ARRAY = [
  { isReceived: true, isLastOne: true },
  { isReceived: false, isLastOne: false },
  { isReceived: false, isLastOne: true },
]

const Messages: FC = () => (
  <View>
    <Flex flexDirection="column" height="62vh" overflowY="scroll">
      {MESSAGES_ARRAY.map(({ isReceived, isLastOne }, index) => (
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
  </View>
)
export default Messages
