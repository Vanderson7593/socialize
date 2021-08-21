import { View } from '@elements'
import styled from '@emotion/styled'

export const ImageWrapper = styled(View)`
    img {
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.BLUE} !important;
    }
  }
`
