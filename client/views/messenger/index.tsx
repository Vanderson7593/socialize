import { Flex } from '@elements'
import { FC } from 'react'
import LeftSide from './components/left-side'
import Middle from './components/middle'
import RightSide from './components/right-side'

const Messenger: FC = () => (
  <Flex>
    <Flex
      flexDirection={['column', 'column', 'column', 'row']}
      alignItems={['center', 'center', 'center', 'flex-start']}
      justifyContent={['center', 'center', 'center', 'flex-start']}
    >
      <LeftSide />
      <Middle />
      <RightSide />
    </Flex>
  </Flex>
)

export default Messenger
