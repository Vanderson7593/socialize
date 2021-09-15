import { createContext, FC, useContext, useEffect, useState } from 'react'
import SocketIO from 'socket.io-client'

type SocketContextProps = {}

const SocketContext = createContext<SocketContextProps | null>(null)

const SocketProviderContext: FC = ({ children }) => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const s = SocketIO()
    setSocket(s as any)
  }, [])

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}

export default SocketProviderContext
export const useSocketContext = () => useContext(SocketContext) as SocketContextProps
