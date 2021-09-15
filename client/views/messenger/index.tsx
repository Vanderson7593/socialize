import { Flex, View } from '@elements'
import { FC, useEffect } from 'react'
import SocketIO, { Socket } from 'socket.io-client'
import LeftSide from './components/left-side'
import Middle from './components/middle'

const Messenger: FC = () => {
  useEffect(() => {
    SocketIO()
  }, [])

  return (
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
}

export default Messenger
