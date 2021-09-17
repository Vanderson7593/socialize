import { Input } from '@components'
import { Flex, Heading, Text, View } from '@elements'
import { useTheme } from '@emotion/react'
import { ArrowRightCircle } from '@svgs'
import { useRouter } from 'next/router'
import { FC, FormEvent, useRef, useState } from 'react'
import { signIn, getProviders } from 'next-auth/client'

type TError = { status: boolean; message: string }

const Login: FC = () => {
  const [error, setError] = useState<TError>({ status: false, message: '' })
  const { colors } = useTheme()
  const usernameRef = useRef<HTMLInputElement>()
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = usernameRef.current?.value

    console.log(formData)

    if (formData?.length === 0) {
      setError({ status: true, message: 'Username is required!' })
      return
    }

    const res = await signIn('credentials', {
      redirect: false,
      username: formData,
    })

    if (!res?.ok) return

    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        style={{ gap: 30 }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Heading textAlign="center" color={colors.BLUE} as="h3">
          Welcome back!
          <br />
          Start texting!
        </Heading>
        <View>
          <Text>Username</Text>
          <Input innerRef={usernameRef} placeholder="Username" bgColor={colors.FOREGROUND} />
          {error.status && <p style={{ color: colors.ERROR, fontSize: '10pt' }}>{error.message}</p>}
        </View>
        <View>
          <button type="submit">
            <ArrowRightCircle />
          </button>
        </View>
      </Flex>
    </form>
  )
}
export default Login
