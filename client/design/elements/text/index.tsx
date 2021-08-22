import { fontSizes, PALETTE } from 'client/design/theme'
import styled from '@emotion/styled'
import { color, compose, textAlign, textShadow, typography } from 'styled-system'

export const Text = styled('p')(
  {
    fontSize: fontSizes.Small,
    color: PALETTE.GREY_DARK,
    fontWeight: 'lighter',
  },
  compose(color, textAlign, textShadow, typography)
)

export default Text
