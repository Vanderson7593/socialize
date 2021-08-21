import { breakpoints } from './breakpoints'
import { fontSizes } from './font-sizes'
import PALETTE from './palette'

export * from './font-sizes'

const theme = {
  colors: PALETTE,
  fontSizes,
  breakpoints,
}

export { PALETTE, theme }
export type Theme = typeof theme
