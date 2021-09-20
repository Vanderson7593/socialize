import { IUser } from '@types'
import { Session } from 'next-auth'
import { signOut, useSession } from 'next-auth/client'
import { createContext, FC, RefObject, useContext, useEffect, useRef, useState } from 'react'
import IO from 'socket.io-client'

type TSocket = keyof typeof IO

type SocketContextProps = {
  socket: RefObject<TSocket>
  users: IUser[]
  session: Session
  logOut: () => void
}

const SocketContext = createContext<SocketContextProps | null>(null)

const SocketProviderContext: FC = ({ children }) => {
  const socketRef = useRef<TSocket>() as any
  const [users, setUsers] = useState<IUser[]>([])
  const [session] = useSession()

  useEffect(() => {
    if (!session) return
    socketRef.current = IO()
    socketRef.current.emit('addUser', session.user)
    socketRef.current.on('reconnect', session.user)
    socketRef.current.on('users', (data: IUser[]) => setUsers(data))
  }, [session])

  const logOut = () => {
    if (session) {
      socketRef.current.emit('remUser', session.user)
      signOut()
    }
  }

  return (
    <SocketContext.Provider
      value={{ socket: socketRef as any, users, session: session as Session, logOut }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProviderContext
export const useSocketContext = () => useContext(SocketContext) as SocketContextProps
