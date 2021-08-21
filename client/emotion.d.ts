import '@emotion/react'
import { Theme as DTheme } from '@theme'

declare module '@emotion/react' {
  export interface Theme extends DTheme {}
}
