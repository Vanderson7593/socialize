import { Theme, theme } from 'client/design/theme'
import { Global, ThemeProvider } from '@emotion/react'
import { GlobalStyles } from 'client/design/styles'
import type { AppProps } from 'next/app'
import SocketProviderContext from 'client/context/socket-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme as Theme}>
        <SocketProviderContext>
          <Component {...pageProps} />
        </SocketProviderContext>
      </ThemeProvider>
    </>
  )
}
export default MyApp
