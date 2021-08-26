import { Avatar } from '@components'
import { Flex, View } from '@elements'
import { FC } from 'react'

const RightSide: FC = () => (
  <View>
    <Flex justifyContent="center" alignItems="center">
      <Avatar src="/me.jpg" width={200} height={200} />
    </Flex>
  </View>
)
export default RightSide
