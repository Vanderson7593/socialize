import Messenger from '@views/messenger'
import Chat from '@views/messenger/components/chat'
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return <Chat id={1} />
}

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) =>
//   new Promise(() => { })

export default Home
