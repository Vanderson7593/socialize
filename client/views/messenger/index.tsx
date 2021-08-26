import { Flex, View } from '@elements'
import { FC } from 'react'
import LeftSide from './components/left-side'
import Middle from './components/middle'

const Messenger: FC = () => (
  <View>
    <Flex
      flexDirection={['column', 'column', 'column', 'row']}
      alignItems={['center', 'center', 'center', 'flex-start']}
      justifyContent={['center', 'center', 'center', 'normal']}
    >
      <LeftSide />
      <Middle />
    </Flex>
  </View>
)

export default Messenger
