import Messenger from '@views/messenger'
import SocketProviderContext from 'client/context/socket-context'
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { getSession } from 'next-auth/client'

const Home: NextPage = () => (
  <>
    <SocketProviderContext>
      <Messenger />
    </SocketProviderContext>
  </>
)

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    }
  }

  return {
    props: {},
  }
}

export default Home
