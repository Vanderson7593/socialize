import { Flex, View } from '@elements'
import { useSocketContext } from 'client/context/socket-context'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import Messages from './components/messages'
import { UseSessionReturn } from '../../../typescript'

const Messenger: FC = () => {
  const [session] = useSession()
  const socket = useSocketContext() as any
  const router = useRouter()

  useEffect(() => {
    if (!socket) return
    socket.on('status', (data: unknown) => console.log(data))
  }, [socket])

  useEffect(() => {
    console.log(session?.user)
  }, [session])

  return (
    <View>
      <Flex
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={['center', 'center', 'center', 'flex-start']}
        justifyContent={['center', 'center', 'center', 'normal']}
      >
        <Messages />
      </Flex>
    </View>
  )
}

export default Messenger
