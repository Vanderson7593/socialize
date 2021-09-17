import { Theme, theme } from 'client/design/theme'
import { Global, ThemeProvider } from '@emotion/react'
import { GlobalStyles } from 'client/design/styles'
import type { AppProps } from 'next/app'
import SocketProviderContext from 'client/context/socket-context'
import { Session } from 'next-auth'
import { Provider } from 'next-auth/client'
import { FC, PropsWithChildren } from 'react'
import { NextPage } from 'next'
import { WithAdditionalParams } from '../typescript'

interface PageProps {
  session: WithAdditionalParams<Session> | undefined
}

interface MyAppProps {
  Component: FC<unknown>
  pageProps: PropsWithChildren<PageProps>
}

const MyApp: NextPage<MyAppProps> = props => {
  const { Component, pageProps } = props

  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme as Theme}>
        <SocketProviderContext>
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        </SocketProviderContext>
      </ThemeProvider>
    </>
  )
}
export default MyApp
