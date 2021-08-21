import { Theme, theme } from 'client/design/theme'
import { Global, ThemeProvider } from '@emotion/react'
import { GlobalStyles } from 'client/design/styles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme as Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
