import Messenger from '@views/messenger'
import SocketProviderContext from 'client/context/socket-context'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <>
    <SocketProviderContext>
      <Messenger />
    </SocketProviderContext>
  </>
)

export default Home
