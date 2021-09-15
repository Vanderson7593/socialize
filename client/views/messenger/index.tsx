import { Flex, View } from '@elements'
import { useSocketContext } from 'client/context/socket-context'
import { FC, useEffect } from 'react'
import LeftSide from './components/left-side'
import Middle from './components/middle'

const Messenger: FC = () => {
  const socket = useSocketContext() as any

  useEffect(() => {
    if (!socket) return

    socket.on('status', (data: unknown) => console.log(data))
  }, [socket])

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
