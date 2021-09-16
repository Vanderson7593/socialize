import Messenger from '@views/messenger'
import Middle from '@views/messenger/components/middle'
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return <Middle />
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) =>
  new Promise(() => { })

export default Home
